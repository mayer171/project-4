from django.urls import path
from .api import SignupAPI, UserAPI, SigninAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth/signup', SignupAPI.as_view()),
    path('api/auth/user/', UserAPI.as_view()),
    path('api/auth/signin', SigninAPI.as_view()),
    path('api/auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout')
]
