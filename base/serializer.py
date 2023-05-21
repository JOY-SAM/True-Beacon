from rest_framework import serializers
from base.models import NFT

class NFT_Serializer(serializers.ModelSerializer):
    class Meta:
        model = NFT
        fields = ['id','date','price','instrument_name']