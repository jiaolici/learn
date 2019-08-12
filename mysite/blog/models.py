from django.db import models
from django import forms

# Create your models here.
class BlogPost(models.Model):
    objects = models.Manager()
    title=models.CharField(max_length=150)
    body=models.TextField()
    timestamp=models.DateTimeField()
    class Meta:
        ordering = ('-timestamp',)

    def __str__(self):
        return self.title

class BlogPostForm(forms.ModelForm):
    class Meta:
        model = BlogPost
        exclude = ('timestamp',)#由于时间不需要用户手动输入，所以使用exclude移除这个表单项

    def clean_title(self):
        title = self.cleaned_data['title']
        if len(title)<10:
            raise forms.ValidationError('标题长度必须大于10')
        return title