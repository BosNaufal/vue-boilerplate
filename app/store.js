
import Vue from 'vue'
import Vuex from 'vuex'

import App from './containers/App/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    App
  },
  strict: true
})

export default store
