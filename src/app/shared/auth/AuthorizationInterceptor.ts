import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import { Router } from '@angular/router';

@Injectable(
  {providedIn: 'root'}
)
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private router: Router){}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
        this.router.navigateByUrl(`/login`);
        return of(err.message); 
    }
    return throwError(err);
}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('/login') === -1) {
      request = request.clone({
        setHeaders: {
          'authorization': localStorage.getItem('token')
        }
      });
    }

    return next.handle(request).pipe(catchError(x=> this.handleAuthError(x)));
  }
}




