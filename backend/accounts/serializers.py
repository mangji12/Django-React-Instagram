from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.authentication import BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    authentication_classes = [JWTAuthentication]

    def create(self, validated_data):
        # User.objects.create(username=validated_data["username"])
        User.objects.create_user(username=validated_data["username"])  # 암호화, 저장까지 다 한다.
        return User.objects.get(username=validated_data["username"])

    class Meta:
        model = User
        fields = ["username", "password"]
