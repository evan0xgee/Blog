import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 自定义模块
import {ArticlesModule} from "./articles/articles.module";
import {ProjectsModule} from "./projects/projects.module";

// 自定义组件
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: DashboardComponent},
];


@NgModule({
  imports: [
    ArticlesModule,
    ProjectsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
