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
  },
  getters : {
    loggedIn(state) {
      return state.token !== null
    }
  },
})
