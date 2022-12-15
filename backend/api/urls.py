from django.urls import path
from api.views import *


urlpatterns = [
    path("resume/", ProfileView.as_view(), name="resume"),
    path("list/", ProfileView.as_view(), name="list")
]