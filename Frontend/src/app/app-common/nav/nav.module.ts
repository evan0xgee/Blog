// Angular
import { NgModule } from '@angular/core';

// 自定义模块
import {NavRoutingModule} from './nav-routing.module';

// 自定义组件
import { NavComponent } from './nav.component';


@NgModule({
  imports: [
    NavRoutingModule
  ],
  declarations: [
    NavComponent
  ],
  providers: [],
  exports: [NavComponent]
})
export class NavModule { }
