/* eslint-disable import/no-anonymous-default-export */
import axiosRequest from './AxiosService'
import { deleteLocalStorage } from './LocalStorage'

export default () => {
  function login(url, userName, password) {
    return axiosRequest().logInRequest(url, userName, password)
  }

  function logout() {
    deleteLocalStorage('encodedUser')
  }

  return {
    login: login,
    logout: logout,
  }
}
