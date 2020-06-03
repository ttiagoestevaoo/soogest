import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Api url
axios.defaults.baseURL = process.env.API_URL

Vue.use(Vuex)

var Promisse = require('promise')

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    snack: '',
    snackMessage: ''
  },
  getters: {
    loggedIn (state) {
      return state.token != null
    },
    credentials (state) {
      return {
        Accept: 'application/json',
        Authorization: 'Bearer ' + state.token
      }
    }
  },
  mutations: {
    retrieveToken (state, token) {
      state.token = token
    },
    setSnack (state, message) {
      state.snack = true
      state.snackMessage = message
    }
  },
  actions: {
    retrieveToken (context, credentials) {
      return new Promisse((resolve, reject) => {
        axios.post('/login', {
          username: credentials.email_login,
          password: credentials.senha_login
        })
          .then(response => {
            const token = response.data.access_token
            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    retrieveUser (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.get('/user')
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    registerUser (context, credentials) {
      return new Promisse((resolve, reject) => {
        axios.post('/register', {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          c_password: credentials.c_password
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    forgetToken (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token
      axios.post('/logout')
        .then(response => {
          localStorage.removeItem('access_token')
          context.commit('retrieveToken')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
