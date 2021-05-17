export interface FBAuthResponsePayload {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

export interface FBAuthResponseError {
  error: {
    code: number;
    errors: FBAuthError[];
    message: string;
  };
}

export interface FBAuthError {
  domain: string;
  reason: string;
  message: string;
}
