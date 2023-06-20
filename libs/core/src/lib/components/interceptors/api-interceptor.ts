import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {CoreConfigInterface} from "../../interfaces/core-config.interface";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  exceptionList = ['assets/translations','https://weather.visualcrossing.com']

  constructor(@Inject('coreConfig') public coreConfig: CoreConfigInterface) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url } = req
    let isUrlException = false
    this.exceptionList.forEach((exception) => {
      if (url.includes(exception)) {
        isUrlException = true
      }
    })
    const baseUrl = isUrlException ? req.url : `${this.coreConfig.environment.apiBaseUrl}/${url}`;
    const localRequest = req.clone({
      url: baseUrl,
    });
    return next.handle(localRequest);
  }
}
