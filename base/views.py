from asyncio.log import logger
import datetime
from rest_framework import serializers

from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils.translation import gettext_lazy as _

from base.models import NFT

# Create your views here.


def Print(val):
    logger.error("*****************************************")
    logger.error(val)
    logger.error("*****************************************")

@api_view(['GET'])
def get_historical_data(request):
    # ! There is no symbol  in CSV

    Print(request.GET)
    from_date  = request.GET.get('from_date','')
    to_date  = request.GET.get('to_date','')
    symbol  = request.GET.get('symbol','')
    
    # ! There is no symbol  in CSV so not implemented

    NFT_Obj = NFT.objects.filter(date__gt=datetime.date(from_date),date__lt=datetime.date(to_date))
    serializer = NFT_Serializer(NFT_Obj, many=True)
    return Response(serializer.data)


# Serializer implemented  here because projects is small
class NFT_Serializer(serializers.ModelSerializer):
    class Meta:
        model = NFT
        fields = ['id','date','price','instrument_name']