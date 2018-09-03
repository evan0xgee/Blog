//  Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 公共模块
import {NavModule} from '../../app-common/nav/nav.module';
import {FooterModule} from '../../app-common/footer/footer.module';

// 第三方

// 自定义组件
import { ArticleDetailComponent } from './article-detail.component';

// 自定义管道
import {MarkdownItPipe} from '../../../common/pipe/markdown.pipe';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    FooterModule,
  ],
  declarations: [
    ArticleDetailComponent,
    MarkdownItPipe
  ]
})
export class ArticleDetailModule { }
