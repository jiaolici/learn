from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.
class JSONResponse(HttpResponse):
    '''
    将content转化为JSON
    '''
    def __init__(self,data,**kwargs):
        content = JSONRenderer().render(data)  #注意content是bytes类型
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content,**kwargs)

def snippet_list(request):
    """
    列出所有的code snippet，或创建一个新的snippet。
    """
    if(request.method == 'GET'):
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets,many=True)
        return JSONResponse(serializer.data)
    elif(request.method == "POST"):
        data = JSONParser().parse(request)
        serializer = SnippetSerializer(data=data)
        if(serializer.is_valid()):
            serializer.save()
            return JSONResponse(serializer.data,status=201) #201表示已创建
        return JSONResponse(serializer.errors,status=400)

def snippet_detail(request,pk):
    """
    获取，更新或删除一个 code snippet。
    """
    try:
        snippet = Snippet.objects.get(pk=pk)
    except ObjectDoesNotExist: #如果不存在
        return HttpResponse(status=404)
    
    if(request.method=='GET'):
        serializer = SnippetSerializer(snippet)
        return JSONResponse(serializer.data)
    elif(request.method=='PUT'):
        data = JSONParser().parse(request)
        serializer = SnippetSerializer(snippet,data=data)
        if(serializer.is_valid()):
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors,status=400)
    elif(request.method=='DELETE'):
        snippet.delete()
        return HttpResponse(status=204) #204表示无内容，服务器成功处理了请求，但是没有返回任何内容
