import axios from 'axios'

import { API_ENDPOINT } from '../constant/index'

const ACTION_SUBMIT = '?action=submit'

export const registerParticipant = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  const promiseRegister = token => {
    axios({
      url: `${URL}${ACTION_SUBMIT}`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data
    })
  }

  promiseRegister(token)
    .then(res => {
      success && success(res)
    })
    .catch(err => console.log(err))
}

export const registerSponsor = () => {}

export const registerVolunteer = () => {}

export const registerCoacher = () => {}
