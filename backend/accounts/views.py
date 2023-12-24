from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth import get_user_model
from .serializers import SignupSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

User = get_user_model()


# Create your views here.
class SignUpView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = SignupSerializer

    # 클라이언트가 입력한 폼을 받아오는 메서드
    def perform_create(self, serializer):
        serializer.save()

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)  # 실패하면 validation error을 발생시킴
    #     self.perform_create(serializer)  # 객체 생성. save()가 아님.
    #     return Response(serializer.data)
