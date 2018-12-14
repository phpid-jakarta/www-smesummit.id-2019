import {
  BASE_API_URL,
  API_ENDPOINT
} from '../constant/index'

import { getToken } from './token'

const ACTION_SUBMIT = '?action=submit'

export const registerParticipant = (data, success) => {
  const URL = `${BASE_API_URL}${API_ENDPOINT.REGISTER_PARTICIPANT}`
  const promiseToken = getToken(URL)
  const promiseRegister = (token) => {
    fetch(`${URL}${ACTION_SUBMIT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }).then(r => r.json())
  }

  promiseToken.then(res => {
    promiseRegister(res.data.token)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  })
}

export const registerSponsor = () => {}

export const registerVolunteer = () => {}

export const registerCoacher = () => {}
