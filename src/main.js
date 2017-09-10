import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import {Time} from './time'

Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("Corinthians", require('./assets/logo60.png')),
      new Time("Corinthians", require('./assets/logo60.png')),
      new Time("Corinthians", require('./assets/logo60.png'))
    ]
  }
})
