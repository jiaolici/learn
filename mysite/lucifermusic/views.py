from django.shortcuts import render
from .models import LudiferMusic,Artist
from django.http import StreamingHttpResponse,JsonResponse
from django.forms.models import model_to_dict
# Create your views here.
def music(request):
    id = request.GET['id']
    mc_obj = LudiferMusic.objects.get(id=id)
    artists = mc_obj.artist.all()
    artists_li = []
    for artist in artists:
        artists_li.append(model_to_dict(artist))
    return JsonResponse({"name":mc_obj.name,"artists":artists_li,"duration":mc_obj.duration,"album":mc_obj.album,})

def audio(request):
    id = request.GET['id']
    mc_obj = LudiferMusic.objects.get(id=id)
    with open(mc_obj.audio, "rb") as fin:
        mc = fin.read()
    return StreamingHttpResponse(streaming_content=mc)