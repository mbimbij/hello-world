// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import MdModalDialog from 'vue-material-modal-dialog'
import 'vue-material-modal-dialog/dist/md-modal-dialog.css'

import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(MdModalDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
