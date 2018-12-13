const ACTION_TOKEN = '?action=get_token'

export const getToken = (parentUrl) => {
  fetch(`${parentUrl}${ACTION_TOKEN}`)
    .then(r => r.json())
}
