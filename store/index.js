import Vuex from 'vuex'
import {
  API_ENDPOINT
} from '../constant/index'
import { getToken } from '../services/token'
import { registerParticipant } from '../services/register'

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
        state.captcha = `${API_ENDPOINT.CAPTCHA_IMAGE(data)}`
      }
    },
    actions: {
      fetchNewToken ({ commit }, { url, success }) {
        getToken(url).then(response => {
          const token = response.data.token
          commit('setToken', token)
          commit('setCaptcha', token)
          success && success()
        })
      },
      postRegisterParticipant ({ commit, dispatch }, { token, data, success }) {
        registerParticipant(token, data, success)
      }
    }
  })
}

export default createStore
