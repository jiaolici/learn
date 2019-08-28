from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Novel
from .serializers import NovelSerializer
from django.conf import settings

class NovelList(APIView):
    def get(self,request,type):
        novels = Novel.objects.filter(novel_type=type)
        serializer = NovelSerializer(novels)
        return Response(serializer.data)


class NovelType(APIView):
    def get(self,request):
        return Response({'types':settings.NOVEL_TYPES})
