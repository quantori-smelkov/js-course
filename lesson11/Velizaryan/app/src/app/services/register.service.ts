import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class RegisterService {
  constructor(
    private readonly httpClient: HttpClient) { }

  singIn(): Observable<{message: string}> {
    return this.httpClient
      .get(`${environment.bffServiceUrl}/sign-up`)
      .pipe(
        tap((c) => console.log(c)),
        catchError((err: HttpErrorResponse) => {
          console.log('error:' + err.error);
          return of(err.error);
        })
      );
  }
}

