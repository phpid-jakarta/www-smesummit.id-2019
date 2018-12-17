export const __isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true
  }
  return false
}

export const __isNotEmptyArray = (array) => {
  if (__isNotNull(array) && array.length > 0) {
    return true
  }
  return false
}

export const __isNotEmptyString = (variable) => {
  if (__isNotNull(variable) && variable.trim() !== '') {
    return true
  }
  return false
}
