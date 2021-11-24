import { Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ErrorMessageService} from '@core/services/error-message.service';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {


  constructor(

   private _errorMessageService: ErrorMessageService,

   // private _snackBar: MatSnackBar
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(

      catchError((httpErrorResponse: HttpErrorResponse) => {

        if (httpErrorResponse.status === 400 && httpErrorResponse.headers.get('X-Exit')) {

          this._errorMessageService.errorMessageEvent.emit(httpErrorResponse.headers.get('X-Exit') ?? '');

        }

        return throwError(() => httpErrorResponse);

      })

    );

  }

}
