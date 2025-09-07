from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_framework.permissions import AllowAny, IsAuthenticated
from dj_rest_auth.registration.views import SocialLoginView
from .serializers import GoogleLoginSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework import generics

# TODO: Add project views


class GoogleLoginView(SocialLoginView):
    permission_classes = [AllowAny]
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:5173"
    client_class = OAuth2Client
    serializer_class = GoogleLoginSerializer


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get(self, request):
        user = request.user
        return Response({"username": user.username, "email": user.email})
