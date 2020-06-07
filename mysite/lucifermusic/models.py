from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField(max_length=100)
    objects = models.Manager()
class LudiferMusic(models.Model):
    artist = models.ManyToManyField(Artist)
    name = models.CharField(max_length=100,default="music")
    audio = models.FilePathField(path="D:\Music")
    duration = models.IntegerField()
    album = models.CharField(max_length=100)
    objects = models.Manager()