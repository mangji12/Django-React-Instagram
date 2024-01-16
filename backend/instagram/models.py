import re
from django.db import models
from django.conf import settings

# Create your models here.

User = settings.AUTH_USER_MODEL


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    caption = models.TextField(max_length=500)
    image = models.ImageField(upload_to="instagram/%y/%m/%d")
    tag = models.ManyToManyField("TagSet", blank=True, related_name="post_tags")
    like = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name="like_post_set"
    )

    def extract_tag_list(self):
        tag_name_list = re.findall(r"#([a-zA-Z\dㄱ-힣]+)", self.caption)
        tag_list = []
        for tag_name in tag_name_list:
            tag, _ = TagSet.objects.get_or_create(name=tag_name)
            tag_list.append(tag)
        return tag_list


class TagSet(models.Model):
    tags = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.tags
