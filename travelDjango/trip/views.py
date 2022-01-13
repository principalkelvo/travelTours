from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Trip
from .serializers import TripSerializer
# Create your views here.

class LatestTripList(APIView): #viewset to get latest trips to show in frontend
    def get(self,request, format= None):
        trips = Trip.objects.all()[0:8] #this shows number of items to be shown in latest trips
        serializer =TripSerializer(trips, many=True)
        return Response(serializer.data)

class PopularTripList(APIView): #viewset to get popular trips to show in frontend
    def get(self,request, format= None):
        trips = Trip.objects.order_by('-rate') [0:8] #this shows number of items to be shown in popular trips
        serializer =TripSerializer(trips, many=True)
        return Response(serializer.data)