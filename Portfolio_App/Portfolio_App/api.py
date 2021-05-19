from Portfolio_App.models import Position
from rest_framework import viewsets, permissions
from .serializers import PositionSerializer 

class PositionViewSet(viewsets.ModelViewSet):
    queryset = Position.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PositionSerializer
