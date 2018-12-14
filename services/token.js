const ACTION_TOKEN = '?action=get_token'

export const getToken = (parentUrl) => {
  return fetch(`${parentUrl}${ACTION_TOKEN}`)
    .then(r => r.json())
}
