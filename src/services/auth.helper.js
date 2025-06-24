import Cookies from 'js-cookie';
import authService from './auth.service';

const TOKEN_KEY = 'token';

export const saveTokenToCookie = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: 1 });
    authService.setToken(token);
};

export const loadTokenFromCookie = () => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) {
        authService.setToken(token);
    }
    return token;
};

export const removeTokenFromCookie = () => {
    Cookies.remove(TOKEN_KEY);
    authService.setToken(null);
};
