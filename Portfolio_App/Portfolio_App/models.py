from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Position(models.Model):
    symbol = models.CharField(max_length=50)
    company = models.CharField(max_length=50, null=True)
    qty = models.FloatField()
    purchase_price = models.FloatField()
    cost_basis = models.DecimalField(null=True, max_digits=15, decimal_places=2)
    current_price = models.DecimalField(null=True, max_digits=15, decimal_places=2)
    current_value = models.DecimalField(null=True, max_digits=15, decimal_places=2)
    profit_loss = models.DecimalField(null=True, max_digits=15, decimal_places=2)
    user = models.ForeignKey(User, related_name='positions', on_delete=models.CASCADE, null=True)
    
