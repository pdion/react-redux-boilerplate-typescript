import makeApiRequest from 'src/lib/makeApiRequest'
import { UserModel } from '../models/UserModel';

export const fetchUserData = () => makeApiRequest({
  method: 'GET',
  url: '127.0.0.1',
})

export const normalizeUserResponseData = (data):UserModel => (
    {
      password: data.password,
      username: data.username,
    }
);
