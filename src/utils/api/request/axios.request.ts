import axios from 'axios';

const requestApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REQUEST_API_URL,
  headers: { Authorization: process.env.NEXT_PUBLIC_REQUEST_API_KEY || '' }
});

// requestApi.interceptors.request.use((config) => {
//   const token = process.env.NEXT_PUBLIC_REQUEST_API_KEY;
//   config.headers!.Authorization = token || '';
//   return config;
// });

export { requestApi };
