
import axios from 'axios';
import Cookies from 'js-cookie';

import API_URL from './config'

const TOKEN = Cookies.get('token') ? Cookies.get('token') : false

const AXIOS = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: TOKEN ? `Bearer ${TOKEN}` : false
  }
})

const api = {

  get() {
    return AXIOS.get('/posts')
    .then((response) => response)
    .catch((err) => ({
      details: err,
      error: true,
    }))
  }

}

export default api;
