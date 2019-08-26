from rest_framework import serializers
from snippets.models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES

#和Form表单类相似。create()和update()方法定义了在调用serializer.save()时如何创建和修改完整的实例。
class SnippetSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    codemore = serializers.HyperlinkedIdentityField(view_name='snippet-code',read_only=True)
    class Meta:
        model = Snippet
        fields = ('id','title','code','linenos','language','style','owner','codemore')

from django.contrib.auth.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    snippets = serializers.HyperlinkedRelatedField(many=True, queryset=Snippet.objects.all(),view_name='snippet-detail')

    class Meta:
        model = User
        fields = ('id', 'username', 'snippets','url')