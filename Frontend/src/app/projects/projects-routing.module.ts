import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 自定义组件
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const routes: Routes = [
  { path: 'projects',
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      {
        path: 'detail',
        component: ProjectDetailComponent
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
export class ProjectsRoutingModule { }
