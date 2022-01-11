from rest_framework import serializers
from .models import Category, Trip

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields =(
            "id",
            "name",
            "get_absolute_url",
            "description",
            "price",
            "get_image",
            "get_thumbnail",
        )