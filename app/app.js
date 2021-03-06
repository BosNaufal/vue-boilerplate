
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VuexSaga from 'vuex-saga'

// Vue Dev Tools In Development only
const dev = process.env.NODE_ENV !== 'production';
Vue.config.debug = dev
Vue.config.devTools = dev

// import components
import app from './containers/App/index.vue' // eslint-disable-line

// import map
import routes from './routes' // eslint-disable-line

// Vue Router Configuration
// Make new VueRouter Instance
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

// Install vuex-saga
import store from './store' // eslint-disable-line
Vue.use(VuexSaga, { store: store })

// Mount The Vue
new Vue(Vue.util.extend({ router }, app)).$mount('app')
