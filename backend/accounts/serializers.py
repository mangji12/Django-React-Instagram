from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        # User.objects.create(username=validated_data["username"])
        User.objects.create_user(username=validated_data["username"])  # 암호화, 저장까지 다 한다.
        return User

    class Meta:
        model = User
        fields = ["username", "password"]
