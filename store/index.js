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
      postRegisterParticipant ({ commit, dispatch }, { token, data, success }) {
        registerParticipant(token, data, success)
      },
      postRegisterCoacher ({ commit, dispatch }, { token, data, success }) {
        registerCoacher(token, data, success)
      },
      postRegisterVolunteer ({ commit, dispatch }, { token, data, success }) {
        registerVolunteer(token, data, success)
      },
      postRegisterSponsor ({ commit, dispatch }, { token, data, success }) {
        registerSponsor(token, data, success)
      },
      postRegisterSpeaker ({ commit, dispatch }, { token, data, success }) {
        registerSpeaker(token, data, success)
      }
    }
  })
}

export default createStore
