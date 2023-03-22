import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // let userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNjN2Y3NGY3YTYxMjIyZTA0ZDQ4N2YwIiwiaWF0IjoxNjc0MDUyNTI4LCJleHAiOjE2NzQwNTk3Mjh9._kMhcyrrW5ZrCbyux9gczzRjiRoA3Hx0BLuvMV8mHM4'
    request = request.clone({
      url: environment.BASE_URL + request.url,
      // headers: new HttpHeaders({
      //   'Access-Control-Allow-Origin': request.url,
      //   Authorization: 'Bearer' + userToken
      // })
    });
    return next.handle(request);
  }
}
