/*  Import des modules necessaires  */
import Axios from './caller.service'

const getAllUsers = () => {
  return Axios.get('/users')
}

const getUser = (uid: string) => {
  return Axios.get('/users/' + uid)
}

const updateUser = (user: { id: string }) => {
  return Axios.patch('/users/' + user.id, user)
}

const createUser = (user: any) => {
  return Axios.put('/users', user)
}

const deleteUser = (uid: string) => {
  return Axios.delete('/users/' + uid)
}

export const userService = {
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
}
