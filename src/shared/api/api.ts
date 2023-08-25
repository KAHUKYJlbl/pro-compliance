import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://64985fe89543ce0f49e1f5d5.mockapi.io/api';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
