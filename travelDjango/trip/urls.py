from django.urls import path, include
from trip import views


urlpatterns = [
    path('latest-trips/',views.LatestTripList.as_view()),
    path('popular-trips/',views.PopularTripList.as_view()),
    path('trips/search/',views.search),
    path('trips/<slug:category_slug>/<slug:trip_slug>/',views.TripDetail.as_view()),
    path('trips/<slug:category_slug>/',views.CategoryDetail.as_view()),

]