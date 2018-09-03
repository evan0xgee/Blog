// Angular
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


// 自定义服务
import {ArticlesService} from '../articles.service';


// 自定义类
import {Article} from '../articles.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public rows: any = [ ];
  constructor(
    private router: Router,
    private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }
  async getArticles(): Promise<any> {
    const data = await this.articlesService.getArticles().toPromise();
    this.rows = data;
    this.rows = this.rows.results;
  }
  async targetDetail(row: Article): Promise<any> {
    try {
      if (row) {
        await this.router.navigate([ '/articles/detail', row.id]);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
