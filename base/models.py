from django.db import models

# Create your models here.
class NFT(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    date        = models.DateTimeField()
    price        = models.DecimalField(max_digits=10,decimal_places=3)
    instrument_name        =models.CharField(max_length=100,null=True, blank=True)

    def __str__(self) -> str:
        return self.instrument_name + "-" +  str(self.price)