/*  Import des modules necessaires  */
import Axios from './caller.service'

const getAllUsers = () => {
  return Axios.get('/users')
}

export const userService = {
  getAllUsers,
}
