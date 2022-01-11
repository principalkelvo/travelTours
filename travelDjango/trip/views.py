from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Trip
from .serializers import TripSerializer
# Create your views here.

class LatestTripList(APIView): #viewset to get latest trips to show in frontend
    def get(self,request, format= None):
        products = Trip.objects.all()[0:8] #this shows number of items to be shown in latest products
        serializer =TripSerializer(products, many=True)
        return Response(serializer.data)