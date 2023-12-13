from django.contrib import admin
from .models import Post, TagSet
from django.utils.html import mark_safe


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["get_image_url"]

    def get_image_url(self, Post):
        return mark_safe(f"<img src='{Post.image.url}'/>")
