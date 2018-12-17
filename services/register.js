import axios from 'axios'

import { API_ENDPOINT } from '../constant/index'

const ACTION_SUBMIT = '?action=submit'

const generalPost = (url, token, data, success, failed) => {
  const promiseRegister = tokenString => {
    axios({
      url: `${url}${ACTION_SUBMIT}`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${tokenString}`,
        'Content-Type': 'application/json'
      },
      data
    })
  }

  promiseRegister(token)
    .then(res => {
      success && success(res)
    })
    .catch(err => {
      failed && failed(err.message)
    })
}

export const registerParticipant = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  generalPost(URL, token, data, success, failed)
}

export const registerSponsor = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_SPONSOR}`
  generalPost(URL, token, data, success, failed)
}

export const registerVolunteer = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_VOLUNTEER}`
  generalPost(URL, token, data, success, failed)
}

export const registerCoacher = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_COACHER}`
  generalPost(URL, token, data, success, failed)
}

export const registerSpeaker = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_SPEAKER}`
  generalPost(URL, token, data, success, failed)
}
