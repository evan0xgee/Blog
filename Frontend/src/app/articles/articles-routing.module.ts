// Angular 模块
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 自定义组件
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: 'articles',
    children: [
      {
        path: '',
        component: ArticleListComponent,
      },
      {
        path: 'detail/:id',
        component: ArticleDetailComponent,
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ArticlesRoutingModule { }
