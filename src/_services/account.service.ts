/*  Import des modules necessaires  */
import Axios from './caller.service'
import store from '../store'

const login = (credentials: unknown) => {
  return Axios.post('/auth/login', credentials)
}

const logout = () => {
  localStorage.removeItem('token')
}

const getToken = () => {
  return localStorage.getItem('token')
}

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

const isLogged = () => {
  const token = localStorage.getItem('token')
  return !!token
}

export const accountService = {
  login,
  logout,
  getToken,
  saveToken,
  isLogged,
}
