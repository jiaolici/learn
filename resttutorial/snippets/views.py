from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import permissions
from snippets.permissions import IsOwnerOrReadOnly
from django.contrib.auth.models import User
from snippets.serializers import UserSerializer
from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.decorators import api_view
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import action

class SnippetViewSet(viewsets.ModelViewSet):
    """
    此视图自动提供`list`，`create`，`retrieve`，`update`和`destroy`操作。
    另外我们还提供了一个额外的`highlight`操作。
    """
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly,)

    @action(renderer_classes=[renderers.StaticHTMLRenderer],methods=['get'],detail=True)
    def code(self,request,*args,**kwargs):
        snippet = self.get_object()
        return Response(snippet.code)
    
    def perform_create(self,serializer):
        serializer.save(owner = self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    此视图自动提供`list`和`detail`操作。
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer