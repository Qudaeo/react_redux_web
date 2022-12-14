import axiosInstance from './axiosInstance';
import {IAuth, ITokens} from '../types/auth';
import {getToken, setTokens, Token} from '../services/localStorage';
import {Url} from './urls';

export const apiAuth = {
  login: async (email: string, password: string) => {
    return await axiosInstance
      .post<IAuth>(Url.AUTH_LOGIN, {
        email,
        password,
      })
      .then(response => {
        setTokens(response.data.tokens);

        return response.data;
      });
  },

  registration: async (email: string, name: string, password: string) => {
    return await axiosInstance
      .post<IAuth>(Url.AUTH_REGISTRATION, {
        email,
        name,
        password,
      })
      .then(response => {
        setTokens(response.data.tokens);

        return response.data;
      });
  },

  refresh: async () => {
    return await axiosInstance
      .post<ITokens>(Url.AUTH_REFRESH, {
        refresh_token: getToken(Token.refresh_token),
      })
      .then(response => {
        setTokens(response.data);
      })
      .catch(e => {
        console.log('auth/refresh error', e);
      });
  },
};
