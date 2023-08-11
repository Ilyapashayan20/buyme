import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const getToken = () => {
  const userDataString = localStorage.getItem('userData');
  if (userDataString !== null) {
    const userData = JSON.parse(userDataString);
    
    return userData.token;
  }

  return '';
}


const api: AxiosInstance = axios.create({
  baseURL: 'https://staging-1.buymeua.shop/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization ': ` Bearer ${getToken()}`,
  },
})

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default api
