from rest_framework import serializers
from snippets.models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES

#和Form表单类相似。create()和update()方法定义了在调用serializer.save()时如何创建和修改完整的实例。
class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = ('id','title','code','linenos','language','style')