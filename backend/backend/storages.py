from storages.backends.s3boto3 import S3Boto3Storage


class MediaStorage(S3Boto3Storage):
    location = "media"  # S3 버킷 내 media 폴더 경로
    default_acl = "public-read"


class StaticStorage(S3Boto3Storage):
    location = "static"  # S3 버킷 내 media 폴더 경로
    file_overwrite = False
