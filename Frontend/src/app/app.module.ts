// Angular 模块
import { BrowserModule      } from '@angular/platform-browser';
import { NgModule           } from '@angular/core';
import { FormsModule        } from '@angular/forms';
import { HttpModule         } from '@angular/http';


// API 配置
import { Config              } from '../common/config/config';


// 自定义服务
import { HttpService         } from '../common/http/api.service';

// 自定义模块
import { AppRoutingModule   } from './app-routing.module';
import { ArticlesModule     } from './articles/articles.module';
import { ProjectsModule     } from './projects/projects.module';
// import { ArticleDetailModule} from "./articles/article-list/article-detail/article-detail.module";

// Angular 组件
import { AppComponent       } from './app.component';

// 公共组件


// 自定义组件
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthComponent       } from './auth/auth.component';
// import {NavModule} from "./app-common/nav/nav.module";
// import {FooterModule} from "./app-common/footer/footer.module";





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule      // 主路由模块
  ],
  exports: [AppRoutingModule],
  providers: [
    Config,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
