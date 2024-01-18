from .common import *

INSTALLED_APPS += ["debug_toolbar", "corsheaders", "django_extensions"]

MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
] + MIDDLEWARE

INTERNAL_IPS = [
    "127.0.0.1",
]

CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://127.0.0.1:8000",
    "http://localhost:3000",
    "http://localhost:5174",
]
