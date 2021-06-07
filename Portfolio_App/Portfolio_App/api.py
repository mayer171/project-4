from Portfolio_App.models import Position
from rest_framework import viewsets, permissions
from .serializers import PositionSerializer
import pyEX as p 
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

# IEX Config
c = p.Client(api_token=API_KEY, version='stable')

class PositionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PositionSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        
        for position in self.request.user.positions.all():
            
            data = c.quote(symbol=position.symbol)
            position.company = data['companyName']
            position.current_price = data['latestPrice']
            position.current_value = position.qty * position.current_price
            position.cost_basis = position.purchase_price * position.qty
            position.profit_loss = position.current_value - position.cost_basis
            position.save()

        return self.request.user.positions.all()

