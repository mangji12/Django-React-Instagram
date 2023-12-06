from django.contrib import admin
from .models import Tag, Comment, Post
from django.utils.safestring import mark_safe

# Register your models here.


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["photo_tag", "caption"]

    def photo_tag(self, post):
        return mark_safe(f"<img src={post.photo.url} style='width:100px;' />")
