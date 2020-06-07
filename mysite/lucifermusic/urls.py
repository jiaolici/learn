from django.conf.urls import *
# import blog.views
from . import views

urlpatterns = [
    url(r'^music', views.music),
    url(r'^audio', views.audio),
]