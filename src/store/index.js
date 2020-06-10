import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Api url
axios.defaults.baseURL = process.env.API_URL || 'http://soogest-api.herokuapp.com/api'

Vue.use(Vuex)

var Promisse = require('promise')

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    snackbar: {}
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
    setSnackbar (state, snackbar) {
      state.snackbar = snackbar
    }
  },
  actions: {
    setSnackbar ({ commit }, message) {
      var snackbar = {
        showing: true,
        text: message
      }
      commit('setSnackbar', snackbar)
    },
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
            resolve(response)
          })
          .catch(error => {
            reject(error)
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
            reject(error)
          })
      })
    },
    createProject (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.post('/projects', {
          name: credentials.name,
          description: credentials.description,
          deadline: credentials.deadline
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateProject (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.put('/projects/' + credentials.id, {
          name: credentials.name,
          description: credentials.description,
          deadline: credentials.deadline
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyProject (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.delete('/projects/' + credentials.id)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProjects (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.get('/projects')
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProject (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token
      return new Promisse((resolve, reject) => {
        axios.get('/projects/' + id)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    createTask (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.post('/tasks', {
          name: credentials.name,
          description: credentials.description,
          deadline: credentials.deadline,
          project_id: credentials.project_id,
          complete: credentials.complete
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateTask (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.put('/tasks/' + credentials.id, {
          name: credentials.name,
          description: credentials.description,
          deadline: credentials.deadline,
          complete: credentials.complete,
          project_id: credentials.project_id
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyTask (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.delete('/tasks/' + credentials.id)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getTasks (context, credentials) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token

      return new Promisse((resolve, reject) => {
        axios.get('/tasks')
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getTask (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token
      return new Promisse((resolve, reject) => {
        axios.get('/tasks/' + id)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    forgetToken (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.token
      return new Promisse((resolve, reject) => {
        axios.post('/logout')
          .then(response => {
            localStorage.removeItem('access_token')
            context.commit('retrieveToken')
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
