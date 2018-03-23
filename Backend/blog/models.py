from django.db import models
from datetime import datetime
from django.utils import timezone
# Create your models here.
class Article(models.Model):
    """
    文章
    """
    article_name = models.CharField(max_length=200, verbose_name="文章标题")
    article_content = models.TextField(verbose_name="文章内容")
    add_time = models.DateTimeField(default=datetime.now(), verbose_name="保存日期")
    mod_time = models.DateTimeField(auto_now=True, verbose_name="修改日期")

    class Meta:
        verbose_name="文章"
        verbose_name_plural= verbose_name

    def __str__(self):
        return self.article_name


class Project(models.Model):
    project_name = models.CharField(max_length = 300, verbose_name="项目名称")
    article_content = models.TextField(verbose_name="项目内容")
    add_time = models.DateTimeField(auto_now_add=True,verbose_name="添加时间")


    class Meta:
        verbose_name="项目"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.project_name