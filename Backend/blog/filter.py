from rest_framework import generics
from django_filters import rest_framework as filters
import django_filters
from .models import Article


class ArticleFilter(filters.FilterSet):
    name = django_filters.CharFilter(name ='article_name', lookup_expr='contains')
    class Meta:
        model = Article
        fields = {'article_name', 'article_content'}
