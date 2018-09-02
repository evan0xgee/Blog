from django.shortcuts import render

from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import mixins
from rest_framework import generics
from rest_framework import filters
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .models import Article
from .serializers import ArticleSerializer
from .filter import ArticleFilter

# View 弃之
# APIView 弃之
# mixins.ListModelMixin,generics.GenericAPIView 弃之
# generics.ListAPIView 弃之

# 定制参数
class ArticlePagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    page_query_param = 'p' 
    max_page_size = 100

class ArticleListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    文章列表数据
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    pagination_class = ArticlePagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('article_name', 'article_content')
    ordering_fields = ('id', 'add_time')
    # filter_class = ArticleFilter
    # def get_queryset(self):
    #     return Article.objects.filter(article_name)
    # def get(self, request, *arg, **kwrags):
    #     return self.list(request, *arg, **kwrags)

    # def get(self, request, format=None):
    #     articles = Article.objects.all()
    #     articles_serializer = ArticleSerializer(articles, many=True)
    #     return Response(articles_serializer.data)

    # def post(self, request, format=None):
    #     serializer = ArticleSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

