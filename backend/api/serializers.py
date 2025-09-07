from dj_rest_auth.registration.serializers import SocialLoginSerializer
from django.contrib.auth.models import User
from rest_framework import serializers


# TODO: Create serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user


class GoogleLoginSerializer(SocialLoginSerializer):
    # !These fields are required to accept the token/code from the frontend
    code = serializers.CharField(required=False, allow_blank=True)
    access_token = serializers.CharField(required=False, allow_blank=True)
    id_token = serializers.CharField(required=False, allow_blank=True)

    def validate(self, attrs):
        # !data validation
        attrs = super().validate(attrs)

        # !custom validation
        if (
            not attrs.get("code")
            and not attrs.get("access_token")
            and not attrs.get("id_token")
        ):
            raise serializers.ValidationError(
                "At least one of code, access_token or id_token must be provided."
            )
        return attrs
