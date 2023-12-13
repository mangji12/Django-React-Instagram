from rest_framework import routers
from . import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register("", views.PostViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
