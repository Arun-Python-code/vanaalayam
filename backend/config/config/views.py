from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Serializers import BookingSerializer
from .models import Rooms_types
from django.core.mail import send_mail


def home(request):
    return HttpResponse("Hello, World!")


@api_view(['POST'])
def create_booking(request):

    serial = BookingSerializer(data=request.data)

    if not serial.is_valid():
        return Response(
            {
                "message": "Invalid data provided!",
                "errors": serial.errors,
            },
            status=400
        )

    room = Rooms_types.objects.get(
        rooms_type=serial.validated_data["room_type"]
    )

    if room.available_rooms <= 0:
        return Response(
            {
                "message": f"{room.rooms_type}: No rooms available"
            },
            status=400
        )

    # Create booking first
    booking = serial.save()

    # Reduce available room only after booking is saved
    room.available_rooms -= 1
    room.save()

    send_mail(
        subject="Vanaalayam Resort - Booking Confirmation",
        message=f"""Hello {booking.name},

Your booking has been successfully confirmed.

Room Type: {booking.room_type}
Check-in: {booking.check_in_date}
Check-out: {booking.check_out_date}

Thank you for choosing Vanaalayam Resort.
""",
        from_email=None,
        recipient_list=[booking.email],
    )

    return Response(
        {
            "message": "Booking created successfully! Confirmation email sent."
        },
        status=201
    )