from django.db import models

# Create your models here.
class Weather(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    condition        = models.CharField(max_length=50, null=True, blank=True)
    location        = models.CharField(max_length=50, null=True, blank=True)
    temperature        =models.PositiveSmallIntegerField(null=True, blank=True)
    humidity        = models.PositiveSmallIntegerField(null=True, blank=True)

    def __str__(self) -> str:
        return self.location + "-" +  self.condition