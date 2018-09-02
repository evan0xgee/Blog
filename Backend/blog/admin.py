from django.contrib import admin

# Register your models here.
from .models import Article,Project

class ArticleAdmin(admin.ModelAdmin):
    fields = ('article_name','article_content','add_time')
    
class ProjectAdmin(admin.ModelAdmin):
    fields = ('project_name', 'project_content')


admin.site.register(Article, ArticleAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.site_header = 'iStorms博客管理系统'
admin.site.site_title = 'iStorms web前端博客'
