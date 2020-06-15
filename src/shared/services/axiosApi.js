import axios from 'axios';
import {API} from '../constants';

export const instance = axios.create({
  baseURL: API.backendUrl,
  timeout: API.requestTimeout,
  headers: {'content-type' : 'application/json'},
})

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = token;
}

export const clearAuthToken = () => {
  instance.defaults.headers.common.authorization = '';

}

export default instance;
