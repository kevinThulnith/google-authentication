# api/urls.py
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView,
)
from .views import CreateUserView, UserInfoView, GoogleLoginView

urlpatterns = [
    path("user/", UserInfoView.as_view(), name="user_info"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("token/blacklist/", TokenBlacklistView.as_view(), name="blacklist_token"),
    path("user/register/", CreateUserView.as_view(), name="register"),
    # dj-rest-auth urls
    path("auth/", include("dj_rest_auth.urls")),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
    # Google login
    path("auth/google/", GoogleLoginView.as_view(), name="google_login"),
]
