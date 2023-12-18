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
    authentication_classes = [JWTAuthentication]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)  # 객체 생성. save()가 아님.
        return Response(serializer.data)
