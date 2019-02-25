export const headers = {
  DEFAULT: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export enum URL {
  login = '/auth/login',
  register = '/auth/register',
}

export const BASE_URL = 'http://10.0.2.2/api';
