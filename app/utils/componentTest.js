
import Vue from 'vue';

const shallow = (component) => {
  // Avoid Undefined $route
  if (typeof component.beforeCreate !== 'function') {
    component.beforeCreate = function () {
      this.$route = { params: { }}
    }
  }

  const root = new Vue({
    template: '<div><test ref="c"></test></div>',
    components: {
      'test': component
    }
  }).$mount()
  return root.$refs.c
}

export default shallow;
