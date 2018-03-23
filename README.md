# Blog verson 1.0
  概述： 
      
   该项目为前后端分离项目，前端采用Vue系列，后端采用Django框架并且结合Django REST framework提供数据接口支持。
  
  
  环境：
      
   Centos 6.5 + Nginx + uWSGI
  
  架构：
      
      
   前端： Vue + Vue-router + Webpack + Sass + Axios + EsLint
    
   后端： Django + REST framework
   
   数据库： Mysql
   
  目录结构：
  
   ```
     - Blog
         - Backend             // 后端项目名称
          |  - Backend  
          |   |   settings.py   //  配置文件，模板路径配置，中间件配置等
          |   |   urls.py       //  后端路由配置 
          |   |   wsgi.py       //  scoket
          |  - blog            // 程序应用目录
          |   |   + migrations  // 存放编译好数据库操作文件
          |   |     __init__.py   
          |   |     admin.py    // django 后台管理文件 注册模型、修改后台标题
          |   |     apps.py     // 应用程序配置文件
          |   |     filter.py   // 条件过滤
          |   |     models.py   // 模型文件
          |   |     serializers.py  // 序列化  
          |   |     test.py
              |     views.py
          |   manage.py  // 命令行工具，用于django 交互
         - Frontend     // 前端
             -
   ```
