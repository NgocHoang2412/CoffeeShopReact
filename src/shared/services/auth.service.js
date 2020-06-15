import axios, { setAuthToken, clearAuthToken } from './axiosApi';
import {API} from '../constants';

export const getItems = async () => {
  let result = await axios.get(API.getItem)
  return result;
}

export const getCategories = async () => {
  let result = await axios.get(API.getCategories)
  return result;
}

export const login = async (payload) => {
  clearAuthToken();
  let result = await axios.post(API.auth, payload)
  
  if(result.status < 400){
    const token = result.data ? result.data.accessToken : null;
    if(token) {
      setAuthToken(token);
      return true;
    }
  }
  return false;
}
