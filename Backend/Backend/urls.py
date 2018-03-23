"""Backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from blog.views import ArticleListViewSet
# from backend.views import ArticleListView

# article_list = ArticleListViewSet.as_view({
#     'get': 'list',
# })
router = DefaultRouter()

#配置 Article的url
router.register(r'articles', ArticleListViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^', include(router.urls)),
    url(r'^', include(router.urls)),
    # url(r'^articles/$', article_list, name='article-list'),
    url(r'^docs/', include_docs_urls(title='个人博客')),
    # url(r'^api/', include(backend.urls)),
    #url(r'^api/shows$', views.add_article.as_view()),
    # url(r'^$', TemplateView.as_view(template_name = 'index.html' )),
]

