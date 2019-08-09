from django.conf.urls import *
# import blog.views
from . import views

urlpatterns = [
    url(r'^$', views.archive),
    url(r'^login',views.login),
    url(r'^create/',views.create_blogpost),
    url(r'^test$',views.test),
    url(r'^test1$',views.test1),
    url(r'^test2$',views.test2),
    
]