
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

  login ({ username, password }) {
    const SERVER_INFO = {
      grant_type: "password",
      client_id: 2,
      client_secret: "NkdNy5EYkPLHcMDfj1E2JbVxRl9UcOOqdBkWchyf",
      scope: ""
    }

    return axios({
      method: 'post',
      url: `${API_URL}/oauth/token`,
      data: {
        ...SERVER_INFO,
        username,
        password
      }
    })
    .then((response) => response)
    .catch((err) => ({
      details: err,
      error: true,
    }))
  },

  register ({ email, password, password_confirmation }) {
    return axios({
      method: 'post',
      url: `${API_URL}/register`,
      data: {
        email,
        password,
        password_confirmation,
      }
    })
    .then((response) => response)
    .catch((err) => ({
      details: err,
      error: true,
    }))
  },

  updateInfo (draft) {
    // return axios({
    //   method: 'put',
    //   url: `${API_URL}/users/profile/update`,
    //   data: {...draft}
    // })
    return AXIOS.put('/users/profile/update', {...draft})
    .then((response) => response)
    .catch((err) => ({
      details: err,
      error: true,
    }))
  }
}

export default api;
