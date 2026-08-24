from rest_framework import serializers
from .models import Booking, Rooms_types


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = "__all__"

    def validate(self, data):

        # Check-in / Check-out validation
        if data["check_in_date"] >= data["check_out_date"]:
            raise serializers.ValidationError(
                "Check-out must be after check-in"
            )

        # Phone validation
        if not data["phone"].isdigit() or len(data["phone"]) != 10:
            raise serializers.ValidationError(
                "Phone number must contain exactly 10 digits"
            )

        # Check room availability
        try:
            self.room = Rooms_types.objects.get(
                        rooms_type=data["room_type"]
                    )
        except Rooms_types.DoesNotExist:
            raise serializers.ValidationError(
               "Invalid room type"
            )

        if self.room.available_rooms <= 0:
            raise serializers.ValidationError(
                f"{data['room_type']}: No rooms available"
            )
        
        return data


class Rooms_typesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rooms_types
        fields = [
            "id",
            "rooms_type",
            "total_rooms",
            "available_rooms"
        ]