import { API_ENDPOINT } from '../constant/index'
const ACTION_SUBMIT = '?action=submit'

export const registerParticipant = (token, data, success) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  const promiseRegister = token => {
    fetch(`${URL}${ACTION_SUBMIT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }).then(r => r.json())
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
