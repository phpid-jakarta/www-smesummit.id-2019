export const checkHttpStatus = (response) => {
  if (response.ok) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    return Promise.reject(error)
  }
}
