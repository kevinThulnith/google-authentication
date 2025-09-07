# backend/urls.py
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls),
    # Include all URLs from your new api app, prefixed with 'api/'
    path("api/", include("api.urls")),
    # You can keep these here, they are not part of the problem
    path("api-auth/", include("rest_framework.urls")),
    path("accounts/", include("allauth.urls")),
]
