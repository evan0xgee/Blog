from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    # article_name = serializers.CharField(required=True, max_length= 200)
    # article_content = serializers.CharField(max_length=10000)
    # add_time = serializers.TimeField(read_only=True)
    class Meta:
        model = Article
        # fields = ('id','article_name', 'article_content', 'add_time')
        fields = '__all__'


    # def create(self, validated_data):
    #     return Article.objects.create(**validated_data)
