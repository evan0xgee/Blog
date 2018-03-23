# Blog v1.0

  项目地址： http://www.istorms.net/
 
  概述： 
      
   该项目为前后端分离项目，前端采用Vue系列，后端采用Django框架并且结合Django REST framework提供数据接口支持。
  
  
  环境：
      
   Centos 6.5 + Nginx + uWSGI
  
  架构：
      
      
   前端： Vue + Vue-router + Webpack + Sass + Axios + EsLint
    
   后端： Django + REST framework
   
   数据库： Mysql
  
 功能：

   基础功能，后期完善。
  
 目录结构：
  
  ```
     - Blog
         - Backend                  // 后端项目名称
          |  - Backend  
          |   |   settings.py       //  配置文件，模板路径配置，中间件配置等
          |   |   urls.py           //  后端路由配置 
          |   |   wsgi.py           //  scoket
          |  - blog                 // 程序应用目录
          |   |   + migrations      // 存放编译好数据库操作文件目录
          |   |     __init__.py   
          |   |     admin.py        // django 后台管理文件 注册模型、修改后台标题
          |   |     apps.py         // 应用程序配置文件
          |   |     filter.py       // 条件过滤
          |   |     models.py       // 模型文件
          |   |     serializers.py  // 序列化  
          |   |     test.py
              |     views.py        // 视图文件，后端业务逻辑。
          |    manage.py            // 命令行工具，用于django 交互
          |
         - Frontend                             // 前端
             + build                            // 项目构建目录 Webpack 相关代码
             + config                           // 配置目录
             /* + dist */                       // 生产环境下，项目文件  执行 npm run build 会产生
             + node_modules                     // npm 加载的项目依赖模块目录
             - src                              // 项目源文件目录
              |   - compontents                 // 组件目录
              |    |   - common                 // 公共组件目录
              |    |    |   Article-detail.vue  // 文章详情组件
              |    |    |   Footer.vue          // 页脚组件
              |    |    |   Nav.vue             // 导航组件
              |    |    Articles.vue            // 文章列表组件
              |    |    Index.vue               // 首页组件
              |    |    Projects.vue            // 项目列表组件
              |   - router
              |       index.js                  // 前端路由配置文件
              |   - sass                        // css预编译工具Sass，scss文件
              |    |  _common.scss              // 公共样式
              |    App.vue
              |    main.js
             + static                           // 静态文件 存放图片、字体文件等
               .xxxx                            // babel 、 Eslint 、 git等 配置
               index.html                       // 首页入口文件
               package.json                     // 项目配置文件 项目依赖的相关插件包
               package-lock.json                // 锁定安装时的插件包的版本 即 npm install 时 安装指定版本致使项目得以运行
               README.md                        // 项目说明文档
```

  安装：
  
```
  
  git clone git@github.com:Eval0day7/Blog.git
  
  cd /Blog/Frontend
  
  npm install
  或
  cnpm install
```



