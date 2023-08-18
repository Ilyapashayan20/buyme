import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const getToken = () => {
  const userDataString = localStorage.getItem('userData');
  if (userDataString !== null) {
    const userData = JSON.parse(userDataString);
    
    return userData.token;
  }

  return '';
}


const api: AxiosInstance = axios.create({
  baseURL: 'https://buymeua.shop/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {

    return Promise.reject(error);
  }
);

export default api;
