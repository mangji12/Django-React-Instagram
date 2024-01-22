from .common import *

# DEBUG = False
DEBUG = os.environ.get("DEBUG") in ["1", "t", "true", "T", "True"]
ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "").split(",")

# DEFAULT_FILE_STORAGE = "backend.storages.MediaAzureStorage"
# STATICFILES_STORAGE = "backend.storages.StaticAzureStorage"

# AZURE_ACCOUNT_NAME = os.environ.get("AZURE_ACCOUNT_NAME")
# AZURE_ACCOUNT_KEY = os.environ.get("AZURE_ACCOUNT_KEY")

# LOGGING = {
#     "version": 1,
#     "disable_existing_loggers": False,
#     "handlers": {
#         "console": {
#             "level": "ERROR",
#             "class": "logging.StreamHandler",
#         },
#     },
#     "loggers": {
#         "django": {
#             "handlers": ["console"],
#             "level": "ERROR",
#         },
#     },
# }

import sentry_sdk

sentry_sdk.init(
    dsn=os.environ.get("DSN_VALUE"),
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    traces_sample_rate=1.0,
    # Set profiles_sample_rate to 1.0 to profile 100%
    # of sampled transactions.
    # We recommend adjusting this value in production.
    profiles_sample_rate=1.0,
)
