import router from '@/router'

export function authGuard() {
  const token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    return true
  }

  router.push('/login')
}

/**
 * Injection de token API
 */

import store from '@/store'
// import router from '@/router'
import { BASE_URL } from '@/_helpers/config'
import { Fish } from '@/types/index'

export async function login(name: string, pswd: string) {
  console.log('login')
  await fetch(BASE_URL + 'api/token/?format=json', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify({
      username: name,
      password: pswd,
    }),
  }).then(response => {
    if (response.status == 200) {
      console.log('login ok')
      //TODO: Json Parse data to get access and refresh token for the function
      response.json().then(data => {
        const access = data.access
        const refresh = data.refresh

        console.log(data.access)
        // let data2 = JSON.parse(data)
        // console.log("updateTokens called")
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)

        console.log('localStorage')
        console.log(localStorage.getItem('access'))
        console.log(localStorage.getItem('refresh'))

        // store.commit('updateTokens', {access, refresh})
      })
    } else {
      console.log('login ko')
      store.state.error = 'Login or password incorrect'
    }
  })
}

async function isTokenExpired(token: string) {
  console.log(BASE_URL + 'infoproducts/?format=json')
  fetch(BASE_URL + 'infoproducts/?format=json', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: { Authorization: 'Bearer ' + token },
  }).then(response => {
    console.log('expired fn : response')
    console.log(response.status == 200)
    if (response.status == 200) {
      console.log('expired fn : token is valid')
      return false
    } else {
      console.log('expired fn : token is invalid')
      return true
    }
  })
}

export async function loggedIn() {
  const accessToken = localStorage.getItem('access')
  const refreshToken = localStorage.getItem('refresh')
  console.log('loggedIn')
  console.log(accessToken)
  console.log(refreshToken)

  if (!accessToken || accessToken === 'undefined') {
    return false
  }

  const accessTokenExpired = isTokenExpired(accessToken)

  console.log('accessTokenExpired')
  console.log(!accessTokenExpired)
  console.log('refreshToken')
  console.log(!refreshToken)

  if (!accessTokenExpired) {
    return true
  }

  if (!refreshToken) {
    return false
  }

  const response = await fetch(BASE_URL + `api/token/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  })

  console.log('aaaaaa ' + response.ok)
  if (!response.ok) {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    return false
  } else {
    const data = await response.json()
    localStorage.setItem('access', data.access)
    return true
  }
}

export function fillArray() {
  console.log('token is valid')
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
}
