import Vuex from 'vuex'
import {
  API_ENDPOINT
} from '../constant/index'
import { getToken } from '../services/token'
import {
  registerParticipant,
  registerSponsor,
  registerVolunteer,
  registerCoacher,
  registerSpeaker
} from '../services/register'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      token: '',
      captcha: ''
    }),
    getters: {},
    mutations: {
      setToken (state, data) {
        state.token = data
      },
      setCaptcha (state, data) {
        state.captcha = `${API_ENDPOINT.CAPTCHA_IMAGE(encodeURIComponent(data))}`
      }
    },
    actions: {
      fetchNewToken ({ commit }, { url, success }) {
        getToken(url).then(response => {
          const token = response.data.data.token
          commit('setToken', token)
          commit('setCaptcha', token)
          success && success()
        })
      },
      postRegisterParticipant ({ commit, dispatch }, { token, data, success, failed }) {
        registerParticipant(token, data, success, failed)
      },
      postRegisterCoacher ({ commit, dispatch }, { token, data, success, failed }) {
        registerCoacher(token, data, success, failed)
      },
      postRegisterVolunteer ({ commit, dispatch }, { token, data, success, failed }) {
        registerVolunteer(token, data, success, failed)
      },
      postRegisterSponsor ({ commit, dispatch }, { token, data, success, failed }) {
        registerSponsor(token, data, success, failed)
      },
      postRegisterSpeaker ({ commit, dispatch }, { token, data, success, failed }) {
        registerSpeaker(token, data, success, failed)
      }
    }
  })
}

export default createStore
