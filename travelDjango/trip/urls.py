from django.urls import path, include
from trip import views


urlpatterns = [
    path('latest-trips/',views.LatestTripList.as_view()),
]