import axios from 'axios'
const ACTION_TOKEN = '?action=get_token'

export const getToken = (parentUrl) => {
  return axios({
    url: `${parentUrl}${ACTION_TOKEN}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
