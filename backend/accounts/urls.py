from django.urls import path, include
from rest_framework import routers
from .views import SignUpView

router = routers.DefaultRouter()
router.register(r"signup", SignUpView, basename="signup")

urlpatterns = [
    path("", include(router.urls)),
]
