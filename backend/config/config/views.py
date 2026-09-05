from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Serializers import BookingSerializer
from .models import Rooms_types
from django.db import transaction
import resend
import os



def home(request):
    return HttpResponse("Welcome to Vanaalayam Resort API!")


@api_view(['POST'])
def create_booking(request):
    try:
        serial = BookingSerializer(data=request.data)

        if not serial.is_valid():
            return Response(
                {
                    "message": "Invalid data provided!",
                    "errors": serial.errors
                },
                status=400
            )

        with transaction.atomic():

            room = Rooms_types.objects.select_for_update().get(
                rooms_type=serial.validated_data["room_type"]
            )

            if room.available_rooms <= 0:
                return Response(
                    {
                        "message": f"{room.rooms_type}: No rooms available"
                    },
                    status=400
                )

            booking = serial.save()

            room.available_rooms -= 1
            room.save()

        # Email is separate from booking creation
        try:
            
            resend.api_key = os.getenv("RESEND_API_KEY")
  
            params = {
                    "from": "onboarding@resend.dev",
                    "to": [booking.email],
                    "subject": "Vanaalayam Resort - Booking Confirmation",
                   "html": f"""
                           <h2>Vanaalayam Resort - Booking Confirmation</h2>

                           <p>Hello {booking.name},</p>

                           <p>Your booking has been successfully confirmed.</p>

                           <p>
                             <strong>Booking ID:</strong> {booking.booking_id}<br>
                             <strong>Room Type:</strong> {booking.room_type}<br>
                             <strong>Check-in:</strong> {booking.check_in_date}<br>
                             <strong>Check-out:</strong> {booking.check_out_date}
                           </p>

                           <p>Thank you for choosing Vanaalayam Resort.</p>
                                                                """
                                   }
                                   
            resend.Emails.send(params)

            email_status = "Confirmation email sent."

        except Exception as email_error:
            print("EMAIL ERROR:", repr(email_error))
            email_status = "Booking created, but confirmation email could not be sent."

        return Response(
            {
                "message": "Booking created successfully!",
                "booking_id": booking.booking_id,
                "email_status": email_status,
            },
            status=201
        )

    except Exception as e:
        print("BOOKING ERROR:", repr(e))

        return Response(
            {
                "message": "Booking failed",
                "error": str(e)
            },
            status=500
        )