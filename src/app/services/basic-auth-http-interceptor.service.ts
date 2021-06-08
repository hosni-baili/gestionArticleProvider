import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('faketoken')
    ) {
    req = req.clone({
    setHeaders: {
    Authorization: sessionStorage.getItem('faketoken')
    }
    })
    }
    return next.handle(req);
    }
}
