import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-shoes-store.vercel.app/',
});
