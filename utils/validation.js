import { __isNotEmptyString } from './index'

export const isRequired = (value) => {
  return __isNotEmptyString(value)
}

export const isRequiredWithMinMax = (min, max, value) => {
  return __isNotEmptyString(value) && value.length > min && value.length < max
}

export const isRequiredWithMin = (min, value) => {
  return __isNotEmptyString(value) && value.length > min
}

export const isEmail = (value) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}
