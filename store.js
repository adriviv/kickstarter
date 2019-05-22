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
    user: localStorage.getItem('user') || null

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
            localStorage.removeItem('user')
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
            console.log('ni', response)
            const token = response.data.hash
            const user = {_id: response.data._id, first_name: response.data.first_name, last_name: response.data.last_name, email: response.data.email, gravatar: response.data.gravatar}
            console.log('test user', user)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
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
