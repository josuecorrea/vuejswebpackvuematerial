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
      new Time("Atletico Mineiro", require('./assets/AtleticoMineiro.png')),
      new Time("Atletico Goiano", require('./assets/atleticogoiano.png')),
      new Time("Atletico Paranaense", require('./assets/atleticoparanaense.png')),
      new Time("Botafogo", require('./assets/botafog.png')),
      new Time("Ceara", require('./assets/ceara.png')),
      new Time("Chapecoense", require('./assets/chapecoense.png')),
      new Time("Flamengo", require('./assets/flamengo.png')),
      new Time("Fluminense", require('./assets/fluminense.png')),
      new Time("Gremio", require('./assets/gremio.png')),
      new Time("Internacional", require('./assets/internacional.png')),
      new Time("Palmeiras", require('./assets/palmeiras.png')),
      new Time("Santos", require('./assets/santos.png'))
    ]
  }
})
