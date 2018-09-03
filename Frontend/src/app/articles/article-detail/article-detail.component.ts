// Angular
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Article, ArticlesService} from '../../articles/articles.service';

// 第三方
import * as _ from 'lodash';
import * as markdownIt from 'markdown-it';

// 自定义


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article = new Article();
  id: number;
  rows: Article = new Article();
  content: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
      // const id = Number(this.id);
      // console.log(typeof id);
    });
    this.getArticleDetail();
  }

  async getArticleDetail(): Promise<any> {
    const data = await this.articlesService.getArticles().toPromise();
    // console.log(data.results);
    this.rows = data.results;
    // console.log(this.rows);
    // _.forEach(this.rows, res => {

    //   if (res.id === this.id) {
    //     this.rows = res;
    //     console.log(res);
    //   }

    const rows = _.find(this.rows, res => {

      if (res.id === this.id) {
        const md = new markdownIt();
        this.article = res;
        this.content = md.render(res.article_content);
        console.log(res);
      }
    });
    // console.log(rows);
      // if (res[this.id]) {
      //   console.log(data[this.id]);
      // }
  }
}
