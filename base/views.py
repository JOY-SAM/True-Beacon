from rest_framework import serializers

from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils.translation import gettext_lazy as _

from base.models import Weather
# Create your views here.

@api_view(['GET'])
def getWeather_of_Location(request,query):
    WeatherObj = Weather.objects.get(location=query)
    serializer = WeatherSerializer(WeatherObj, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getAll_Weather(request):
    WeatherObj = Weather.objects.all()
    serializer = WeatherSerializer(WeatherObj, many=True)
    return Response(serializer.data)


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = ['id','condition','location','temperature','humidity']