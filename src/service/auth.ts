import APIClient from '../util/api-client';
import { APIErrorObject } from '../util/api-error-object';

// eslint-disable-next-line
type SuccessCallbackFunction = (response: Record<string, any>) => void;
// eslint-disable-next-line
type FailureCallbackFunction = (error: APIErrorObject) => void;

class AuthService {
  public static async login(
    nim: string | undefined,
    password: string | undefined,
    onSuccess?: SuccessCallbackFunction,
    onFail?: FailureCallbackFunction
  ) {
    const response = await APIClient.POST('/auth/local', {
      identifier: nim,
      password
    });

    if (response instanceof APIErrorObject) {
      if (!onFail) return;
      // eslint-disable-next-line
      return onFail(response);
    }

    APIClient.setToken(response.jwt);
    if (onSuccess) {
      onSuccess(response);
    }
  }

  public static logout(onSuccess?: SuccessCallbackFunction) {
    APIClient.deleteCookie('token');
    if (onSuccess) {
      onSuccess({});
    }
  }
}

export default AuthService;
