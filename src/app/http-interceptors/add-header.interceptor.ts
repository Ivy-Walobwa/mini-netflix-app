import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Add header Interceptor - ${req.url}`);

    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {'Content-Type': 'application/json'}
    });

    return next.handle(jsonReq);
  }

}
