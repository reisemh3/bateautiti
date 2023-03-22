import { createStore } from 'vuex'
// Define the Fish class

import series from '../../ventes/medium.json'
import { BASE_URL } from '@/_helpers/config'
import { Fish } from '@/types/index'
import { loggedIn } from '@/_helpers/auth-guard'

const data = series as Vente[]
export type ProductAmount = {
  amount: number
  pid: number
}

export type Vente = {
  date: string | Date
  id: string
  price: number
  type: 'IN' | 'OUT'
  products: ProductAmount[]
}

const store = createStore({
  state: {
    fishArray: [Fish],
    data,
    accessT: '',
    refreshT: '',
    error: '',
  },
  getters: {
    getFishById:
      state =>
      (
        id: (
          this: void,
          value: never,
          index: number,
          obj: never[]
        ) => value is never
      ) => {
        return state.fishArray.find(fish => fish.id === id)
      },
  },
  //TODO toucher aux mutations pour changer le states
  mutations: {
    loadAllFish(state, fishArray) {
      state.fishArray = fishArray
    },
    updateFish(state, selectedfish) {
      const index = state.fishArray.findIndex(
        fish => fish.id === selectedfish.id
      )
      state.fishArray[index] = selectedfish
    },
    deleteFish(state, selectedfish) {
      const index = state.fishArray.findIndex(
        fish => fish.id === selectedfish.id
      )
      state.fishArray.splice(index, 1)
    },
    updateTokens(state, { accessT, refreshT }) {
      state.accessT = accessT
      state.refreshT = refreshT
      console.log('updateTokens')
      console.log(accessT)
      console.log(refreshT)
      console.log('state')
      console.log(state.accessT)
      console.log(state.refreshT)
    },
  },
  actions: {},
  modules: {},
})

function outputCheckToken() {
  const resp = checkToken()
  let val = null
  resp.then(value => {
    val = value
  })
  return val
}

async function refreshToken() {
  const resp = await fetch(BASE_URL + 'token/refresh/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify(localStorage.getItem('refresh')), // body data type must match "Content-Type" header
  })

  const data = await resp.json()

  if (resp.status == 200) {
    console.log('refresh ok')
    store.commit('updateTokens', {
      accessT: data.access,
      refreshT: data.refresh,
    })
  }

  console.log('refresh')
  console.log(data)
  return data
}

async function checkToken() {
  //will return null if token is not valid and the token if it is
  console.log(store.state.accessT)
  if (localStorage.getItem('access') != '') {
    const resp = await fetch(BASE_URL + 'infoproducts/', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: { Authorization: 'Bearer ' + localStorage.getItem('access') },
    }).then(response => response.json())

    //If token is not valid, try to refresh it
    if (resp.code == 'token_not_valid') {
      console.log('resp token not valid')

      console.log(JSON.stringify({ refresh: localStorage.getItem('refresh') }))
      const resp2 = refreshToken()
    } else {
      localStorage.setItem('access', resp.access)
      localStorage.setItem('refresh', resp.refresh)
      return resp
    }
  } else {
    return Response
  }
}
// Fetch data from API
console.log('fetching data')
console.log(localStorage.getItem('access'))

loggedIn().then(res => {
  console.log('loggedIn : ' + res)
  if (res) {
    checkToken().catch(error => console.error(error))
    console.log("token isn't null")
    fetch(BASE_URL + 'infoproducts/?format=json', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: { Authorization: 'Bearer ' + localStorage.getItem('access') },
    })
      .then(response => response.json())
      .then(data => {
        // Create array of Fish objects using constructor
        store.commit(
          'loadAllFish',
          data.map(
            (fishData: {
              id: number
              name: string
              category: number
              price: number
              unit: string
              availability: boolean
              sale: boolean
              discount: number
              comments: string
              owner: string
            }) =>
              new Fish(
                fishData.id,
                fishData.name,
                fishData.category,
                fishData.price,
                fishData.unit,
                fishData.availability,
                fishData.sale,
                fishData.discount,
                fishData.comments,
                fishData.owner
              )
          )
        )
      })
      .then(() => console.log('blep'))
      .catch(error => console.error(error))
  } else {
    console.log('not logged in, so fuck off :D')
  }
})

export default store

/**
 * Ancienne appel de fish en interne
 */
// export default createStore({
//   state: {
//     users: [
//       { id: 0, name: 'marcel' },
//       { id: 1, name: 'roger' },
//     ],
//     fish: [
//       {
//         id: 12,
//         name: 'Aile de raie',
//         category: 0,
//         price: 10.0,
//         unit: 'kg',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: 'Pêche à la corde',
//         owner: 'tig',
//       },
//       {
//         id: 9,
//         name: 'Araignées',
//         category: 2,
//         price: 7.0,
//         unit: 'kg',
//         availability: false,
//         sale: false,
//         discount: 0.0,
//         comments: 'Hors saison,  pêche aux casiers',
//         owner: 'tig',
//       },
//       {
//         id: 3,
//         name: 'Bar de ligne',
//         category: 0,
//         price: 30.0,
//         unit: 'kg',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: 'Plus de 1.5kg le poisson',
//         owner: 'tig',
//       },
//       {
//         id: 2,
//         name: 'Bar de ligne portion',
//         category: 0,
//         price: 10.0,
//         unit: 'pièce',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: 'Environ 550-700g la pièce',
//         owner: 'tig',
//       },
//       {
//         id: 10,
//         name: 'Bouquets cuits',
//         category: 1,
//         price: 8.0,
//         unit: '100g',
//         availability: false,
//         sale: false,
//         discount: 0.0,
//         comments: "Hors saison, pêche à l'épuisette",
//         owner: 'tig',
//       },
//       {
//         id: 1,
//         name: 'Filet Bar de ligne',
//         category: 0,
//         price: 7.0,
//         unit: '2 filets',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: 'environ 300g',
//         owner: 'tig',
//       },
//       {
//         id: 5,
//         name: 'Filet Julienne',
//         category: 0,
//         price: 19.0,
//         unit: 'kg',
//         availability: false,
//         sale: false,
//         discount: 0.0,
//         comments: 'Pêche à la corde',
//         owner: 'tig',
//       },
//       {
//         id: 7,
//         name: 'Huitres N°2 St Vaast',
//         category: 1,
//         price: 9.5,
//         unit: 'Dz',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: '',
//         owner: 'tig',
//       },
//       {
//         id: 8,
//         name: 'Huitres N°2 St Vaast',
//         category: 1,
//         price: 38.0,
//         unit: '4 Dz',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: '',
//         owner: 'tig',
//       },
//       {
//         id: 13,
//         name: 'Huîtres N°2 OR St Vaast',
//         category: 1,
//         price: 12.0,
//         unit: 'Dz',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: "Médaille d'or Salon Agriculture",
//         owner: 'tig',
//       },
//       {
//         id: 14,
//         name: 'Huîtres N°2 OR St Vaast',
//         category: 1,
//         price: 24.0,
//         unit: '2 Dz',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: "Médaille d'or salon agriculture",
//         owner: 'tig',
//       },
//       {
//         id: 15,
//         name: 'Huîtres N°2 OR St Vaast',
//         category: 1,
//         price: 48.0,
//         unit: '4 Dz',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: "Médaille d'or salon agriculture",
//         owner: 'tig',
//       },
//       {
//         id: 16,
//         name: 'Huîtres N°2 St Vaast',
//         category: 1,
//         price: 19.0,
//         unit: '2 Dz',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: '',
//         owner: 'tig',
//       },
//       {
//         id: 4,
//         name: 'Lieu jaune de ligne',
//         category: 0,
//         price: 12.0,
//         unit: 'kg',
//         availability: true,
//         sale: false,
//         discount: 0.0,
//         comments: 'Environ 550-700g la portion',
//         owner: 'tig',
//       },
//       {
//         id: 6,
//         name: 'Moules de pêche',
//         category: 1,
//         price: 7.0,
//         unit: 'kg',
//         availability: true,
//         sale: true,
//         discount: 5.0,
//         comments: '',
//         owner: 'tig',
//       },
//     ],
//     notifDisplay: false,
//     notifMessage: '',
//   },
//   getters: {
//     getMarcel(state) {
//       return state.users[0].name
//     },
//     //getUser(state, id)
//     getUser: state => (id: number) => {
//       return state.users[id].name
//       // return state.users[id].name
//     },
//     getNotif: state => {
//       return state.notifDisplay
//     },
//     getNotifMessage: state => {
//       return state.notifMessage
//     },
//   },
//   mutations: {
//     changeMarcel(state, payload) {
//       state.users[0].name = payload.name
//     },
//     displayNotif(state, payload) {
//       state.notifDisplay = payload.d
//       state.notifMessage = payload.mes
//     },
//   },
//   actions: {
//     modify(context, payload) {
//       //modify({commit}, payload){
//       console.log(context)
//       context.commit('changeMarcel', { name: payload.name })
//       //commit('changeMarcel', {name: payload.name})
//     },
//   },
//   modules: {},
// })
