from django.contrib import admin
from .models import User


# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

    def __str__(self):
        return f"<{self.pk}> {self.name}"
