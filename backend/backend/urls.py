# backend/urls.py
from django.urls import path, include
from django.contrib import admin

# TODO: Add project urls

urlpatterns = [
    path("admin/", admin.site.urls),
    # API URLs
    path("api/", include("api.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path("accounts/", include("allauth.urls")),
]
