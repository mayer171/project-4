from rest_framework import routers
from .api import PositionViewSet

router = routers.DefaultRouter()
router.register('api/positions', PositionViewSet, 'Positions')

urlpatterns = router.urls
    
