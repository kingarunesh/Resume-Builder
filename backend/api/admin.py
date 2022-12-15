from django.contrib import admin
from api.models import Profile


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "email"]
    list_display_links = ["id", "name", "email"]