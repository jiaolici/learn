from django.shortcuts import render_to_response,render
from .models import BlogPost,BlogPostForm
import datetime
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView
from django.template import loader,Context,Template,RequestContext
from django.http import HttpResponse,JsonResponse

from rest_framework import viewsets
from .serializers import UserSerializer,GroupSerializer
from django.contrib.auth.models import User,Group

# Create your views here.
def archive(request):
    posts = BlogPost.objects.all()
    return render_to_response("archive.html", {'posts': posts})

@csrf_exempt
def create_blogpost(request):
    return HttpResponseRedirect('/admin/')

class BlogPostList(ListView):
    model = BlogPost

def page(request,page_input,another='sss'):
    t = Template("页数：{{ page }},{{another}}")
    c = Context({'page':page_input,'another':another})
    return HttpResponse(t.render(c))

def login(request):
    if(request.user.is_authenticated):
        return HttpResponse("ok")
    else:
        return HttpResponse("bad")

def test(request):
    posts = BlogPost.objects.all()
    return JsonResponse({"msg":list(posts.values())})

def test1(request):
    posts = BlogPost.objects.all()
    return HttpResponse(list(posts.values()))

def test2(request):
    posts = BlogPost.objects.all()
    return HttpResponse({"msg":list(posts.values())})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer