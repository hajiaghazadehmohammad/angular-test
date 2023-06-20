import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpErrorHandlerService} from './http-error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private httpErrorHandlerService: HttpErrorHandlerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) this.httpErrorHandlerService.handleErrorType(error);
        return throwError(() => error);
      })
    );
  }
}
