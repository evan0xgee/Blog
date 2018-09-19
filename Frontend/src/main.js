// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import highlight from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import store from './common/store/store'
import moment from 'moment'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.directive('highlight', (el) => {
  let codes = el.querySelectorAll('pre code')
  codes.forEach((code) => {
    highlight.highlightBlock(code)
  })
})

Vue.filter('date', (data, pattern) => {
  return moment(data).format(pattern)
})
