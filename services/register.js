import axios from 'axios'

import { API_ENDPOINT } from '../constant/index'

const ACTION_SUBMIT = '?action=submit'

const generalPost = (url, token, data, success) => {
  const promiseRegister = token => {
    axios({
      url: `${url}${ACTION_SUBMIT}`,
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

export const registerParticipant = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  generalPost(URL, data, success)
}

export const registerSponsor = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_SPONSOR}`
  generalPost(URL, data, success)
}

export const registerVolunteer = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_VOLUNTEER}`
  generalPost(URL, data, success)
}

export const registerCoacher = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_COACHER}`
  generalPost(URL, data, success)
}

export const registerSpeaker = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_SPEAKER}`
  generalPost(URL, data, success)
}
