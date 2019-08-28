from django.db import models

class Novel(models.Model):
    author = models.CharField(max_length=50,null=False)
    name = models.CharField(max_length=50,null=False)
    intr = models.CharField(max_length=500,null=False)
    cover = models.CharField(max_length=100,null=False)
    novel_type = models.CharField(max_length=20,null=False)
    last_update_chapter = models.CharField(max_length=50,null=False)
    last_update_time = models.DateTimeField(null=False)
    status = models.BooleanField(default=False,null=False)
    source = models.CharField(max_length=50,null=False)
    novel_url = models.CharField(max_length=100,null=False)

    objects = models.Manager()
    class Meta():
        db_table = "novel"