from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(
        title="Django + React SPA",
        default_version="1.0.0",
        description="API Description",
    ),
    public=True,
)

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("admin/", admin.site.urls),
    path("instagram/", include("instagram.urls")),
    path("accounts/", include("accounts.urls")),
    path("docs/", schema_view.with_ui("swagger", cache_timeout=0), name="docs"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    import debug_toolbar

    urlpatterns += [
        path("__debug__/", include(debug_toolbar.urls)),
    ]
