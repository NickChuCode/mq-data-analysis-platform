import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import './icons' // icon

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach(async (to, from, next) => {
  // generate accessible routes map based on roles
  const accessRoutes = await store.dispatch('permission/generateRoutes', 'admin')

  // dynamically add accessible routes
  router.addRoutes(accessRoutes)

  // hack method to ensure that addRoutes is complete
  // set the replace: true, so the navigation will not leave a history record
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
