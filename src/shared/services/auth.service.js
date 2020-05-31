import axios, { setAuthToken, clearAuthToken } from './axiosApi';
import {API} from '../constants';

export const getItems = async () => {
  let result = await axios.get(API.getItem)
  return result;
}
