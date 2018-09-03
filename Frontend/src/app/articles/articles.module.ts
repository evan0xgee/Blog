// Angular 模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// 自定义服务
import {ArticlesService} from './articles.service';


// 自定义模块
import {ArticlesRoutingModule} from './articles-routing.module';
import {NavModule} from '../app-common/nav/nav.module';
import {FooterModule} from '../app-common/footer/footer.module';
import {ArticleDetailModule} from './article-detail/article-detail.module';

//  自定义组件
import { ArticleListComponent } from './article-list/article-list.component';




@NgModule({
  imports: [
    CommonModule,
    NavModule,
    FooterModule,
    ArticleDetailModule,
    ArticlesRoutingModule,   // 文章路由
  ],
  providers: [
    ArticlesService
  ],
  declarations: [
    ArticleListComponent,    // 文章列表组件
  ]
})
export class ArticlesModule { }
