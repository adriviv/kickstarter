import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'path';
import { reject } from 'q';
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || null,
    user : {}
    
  },
  getters : {
    loggedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },

  },
  actions: {
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.get('/logout')
          .then(response => {
            console.log('Are you disconected?', response)
            localStorage.removeItem('token')
            context.commit('destroyToken')
            resolve(response)
          })
          .catch(error =>{
            localStorage.removeItem('token')
            context.commit('destroyToken')
            reject(error)
          })
        })
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.access_token
            localStorage.setItem('token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
  },
})
