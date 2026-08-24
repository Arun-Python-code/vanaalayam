from django.db import models
from django.contrib.auth.models import User
import random

class Booking(models.Model):
    booking_id = models.PositiveIntegerField(unique=True, editable=False)
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=60)
    phone = models.CharField(max_length=10)
    check_in_date = models.DateTimeField()
    check_out_date = models.DateTimeField()
    room_type = models.CharField(max_length=20)
    status = models.CharField(max_length=20, default='Pending')


    def save(self, *args, **kwargs):
        if not self.booking_id:
            while True:
                random_id = random.randint(1000, 9999)
                if not Booking.objects.filter(booking_id = random_id).exists():
                    self.booking_id = random_id
                    break

        super().save(*args, **kwargs)


class Rooms_types(models.Model):
    rooms_type = models.CharField(max_length=20)
    total_rooms = models.IntegerField()
    available_rooms = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


