// Angular 模块
import { NgModule } from '@angular/core';

// 自定义模块
import {NavModule} from '../app-common/nav/nav.module';
import {FooterModule} from '../app-common/footer/footer.module';
import { ProjectsRoutingModule} from './projects-routing.module';


// 自定义组件
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  imports: [
    NavModule,
    FooterModule,
    ProjectsRoutingModule    // 项目路由
  ],
  declarations: [
    ProjectListComponent,    // 项目列表组件
    ProjectDetailComponent,  // 项目详情组件
  ]
})
export class ProjectsModule { }
