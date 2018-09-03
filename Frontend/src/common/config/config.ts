import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable()
export class Config {
  public apiEndPoint: string = environment.apiEndPoint;
}
