// import { create } from 'apisauce'
// // import Rt from 'reactotron-react-native'

// const api = create({
//   baseURL: 'yourBaseUrl.com',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   timeout: 30000
// })

// export const setToken = (token) => api.setHeader('Authorization', `Basic ${token}`)

// export function getLogin (data) { return api.post('/sendRequest', data) }
const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]

export const getLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}