/** Import des modules nécessaires */
import Axios from './caller.service'

const getAllFishs = () => {
  return Axios.get('/fishs')
}

const getFish = (cid: string) => {
  return Axios.get('/fishs/' + cid)
}

const updateFish = (fish: { id: string }) => {
  return Axios.patch('/fishs/' + fish.id, fish)
}

const createFish = (fish: any) => {
  return Axios.put('/fishs', fish)
}

const deleteFish = (cid: string) => {
  return Axios.delete('/fishs/' + cid)
}

export const fishService = {
  getAllFishs,
  getFish,
  updateFish,
  createFish,
  deleteFish,
}
