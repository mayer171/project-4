from django.urls import path, include
from .api import SignupAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth/signup', SignupAPI.as_view()),
    path('api/auth/user', UserAPI.as_view())
]
