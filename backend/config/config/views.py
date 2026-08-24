from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Serializers import BookingSerializer
from .models import Rooms_types


def home(request):
    return HttpResponse("Hello, World!")


@api_view(['POST'])
def create_booking(request):
    # Logic to create a booking
    serial = BookingSerializer(data=request.data)
    if serial.is_valid():
        room = Rooms_types.objects.get(
            rooms_type=serial.validated_data["room_type"]
        )

        room.available_rooms -= 1

        room.save()
        serial.save()
        return Response({"message" : "Booking created successfully!", "data" : serial.data}, status=201)
    return Response({"message" : serial.errors}, status=400)
