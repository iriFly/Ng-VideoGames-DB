
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      // setHeaders: {
      //   'x-rapidapi-key': '64827f9a33c349bfb572053f3acbb315',
      //   'x-rapidapi-host': 'https://api.rawg.io/api/games',
      // // },
      // // setParams: {
      // //   key: '64827f9a33c349bfb572053f3acbb315',
      // }
    });
    return next.handle(req);
  }
}
