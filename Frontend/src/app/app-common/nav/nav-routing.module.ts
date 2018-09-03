// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// 自定义组件
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ArticleListComponent } from '../../articles/article-list/article-list.component';
import { ProjectListComponent } from '../../projects/project-list/project-list.component';

const routes: Routes = [
  { path: 'index', component: DashboardComponent},
  { path: 'articles', component: ArticleListComponent},
  { path: 'projects', component: ProjectListComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class NavRoutingModule { }
