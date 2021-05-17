import { HttpErrorResponse } from '@angular/common/http';
import { FBAuthResponseError } from '../interfeces/auth-rest';

export enum FBAuthErorrs {
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
}

export enum FBAuthDisplayErorrs {
  INVALID_PASSWORD = 'Invalid password',
  EMAIL_NOT_FOUND = 'Email not found',
  DEFAULT = 'Unknown error',
}

export const getAuthErrorMessage = (httpErrorResponse: HttpErrorResponse) => {
  const error: FBAuthResponseError = httpErrorResponse.error;
  const message: string = error.error.message;

  return FBAuthErorrs[message]
    ? FBAuthDisplayErorrs[message]
    : FBAuthDisplayErorrs.DEFAULT;
};
