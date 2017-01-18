
import Vue from 'vue'
import Vuex from 'vuex'

import App from './containers/App/module'
import Home from './containers/Home/module'
import About from './containers/About/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    App,
    Home,
    About
  },
  strict: true
})

export default store
