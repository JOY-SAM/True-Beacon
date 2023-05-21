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

    _from_date  = request.GET.get('from_date','')
    _to_date  = request.GET.get('to_date','')
    symbol  = request.GET.get('symbol','')


    from_date = datetime.datetime.strptime(_from_date, "%Y-%m-%d").date()
    to_date = datetime.datetime.strptime(_to_date, "%Y-%m-%d").date()

    # ! There is no symbol  in CSV so not implemented

    NFT_Obj = NFT.objects.filter(date__gt=from_date,date__lt=to_date)
    serializer = NFT_Serializer(NFT_Obj, many=True)
    return Response(serializer.data)


# Serializer implemented  here because projects is small
class NFT_Serializer(serializers.ModelSerializer):
    class Meta:
        model = NFT
        fields = ['id','date','price','instrument_name']