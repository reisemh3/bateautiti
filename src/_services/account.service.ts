/*  Import des modules necessaires  */
import Axios from './caller.service'

const login = (credentials: any) => {
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
