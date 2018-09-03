// Angular
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { map } from 'rxjs/operators';


// 自定义服务
import { HttpService } from '../../common/http/api.service';

/*
* 自定义类
* */

// 文章
export class Article {
  id: number;
  article_name: string;
  article_content: string;
  add_time: string;
  mod_time: string;
  constructor(item?: any) {
    if (item) {
      this.id = item.id;
      this.article_name = item.article_name;
      this.article_content = item.article_content;
      this.add_time = item.add_time;
      this.mod_time = item.mod_time;
    }
  }
}

@Injectable()
export class ArticlesService {
  constructor(
    private httpService: HttpService) { }

  getArticles(data: any = {}): Observable<Article> {
    return this.httpService.get(`articles/?ordering=-id`, data)
      .pipe(map((res: any) => res.json()))
      .pipe(map((res: any) => {
        res.results = res.results.map((item) => new Article(item));
        return res;
      }));
      // .map(res => res.json())
      // .map(res => {
      //   res.results = res.result.map((item) => new Articles(item));
      //   return res;
      // });
  }
}

