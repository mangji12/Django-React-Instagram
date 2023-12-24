from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.authentication import BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):  # TODO: Userserializer 제작
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "password"]

    def create(self, validated_data):
        # User.objects.create(username=validated_data["username"])
        User.objects.create_user(
            username=validated_data["username"]
        )  # 비밀번호 암호화, 저장까지 다 한다.
        return User.objects.get(username=validated_data["username"])

    # def update(self,instance, validated_data):
    #     instance.
