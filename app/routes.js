import store from './store'

export default [

  { path: '/',
    component: function (resolve) {
      require([
        './containers/Home/index.vue',
        './containers/Home/mutations',
        './containers/Home/actions',
        './containers/Home/getters',
      ], (
        HomeComponent,
        HomeMutations,
        HomeActions,
        HomeGetters
      ) => {
        store.registerModule('Home', {
          ...HomeMutations,
          actions: HomeActions,
          getters: HomeGetters
        })
        resolve(HomeComponent)
      })
    },
    props: true
  },

  { path: '*',
    component: function (resolve) {
      require(['./components/NotFound/index.vue'], resolve)
    },
    props: true
  }
]
