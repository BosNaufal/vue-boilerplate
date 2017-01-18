export default [

  { path: '/',
    component: function (resolve) {
      require(['./containers/Home/index.vue'], resolve)
    }
  },

  { path: '/about',
    component: function (resolve) {
      require(['./containers/About/index.vue'], resolve)
    }
  },

  { path: '*',
    component: function (resolve) {
      require(['./components/NotFound/index.vue'], resolve)
    }
  }
]
