/* Import des moules necessaires */
import axios from 'axios'
import { accountService } from '@/_services'

const Axios = axios.create({
  baseURL: 'http://localhost/8888/',
})

Axios.interceptors.request.use(request => {
  // Si connecté, on ajoute le token dans l'entete
  if (accountService.isLogged()) {
    request.headers.Authorization = 'Bearer ' + accountService.getToken()
  }

  return request
})

export default Axios
