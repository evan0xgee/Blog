// Angular
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs';


// API配置
import {Config} from '../config/config';

// 第三方
import * as _ from 'lodash';


@Injectable()
export class HttpService {
  constructor(
    private http: Http,
    private config: Config) {}

  // createAuthorizationHeader(headers: Headers) {
  //   if (_.isUndefined(headers)) headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return headers;
  // }
  get(url: string, options: RequestOptionsArgs = {}): Observable<any> {
    // options.headers = this.createAuthorizationHeader(options.headers);
    return this.http
      .get(this.config.apiEndPoint + url, options);
      // .catch(this.handleError);
  }

  post(url: string, body: any = {}, options: RequestOptionsArgs = {}): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.config.apiEndPoint + url, body, {headers: headers});
      // .catch(this.handleError);
  }

  put(url: string, body: any = {}, options: RequestOptionsArgs = {}): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.config.apiEndPoint + url, body, {headers: headers});
      // .catch(this.handleError);
  }

  delete(url: string, body: any = {}): Observable<any> {
    // options.headers = this.createAuthorizationHeader(options.headers);
    return this.http
      .delete(this.config.apiEndPoint + url, body);
      // .catch(this.handleError);
  }

  handleError(error: any): Observable<any> {
    const errorMsg = error.json().message || `Server error`;

    // throw an application level error
    return Observable.throw(errorMsg);
  }

}
