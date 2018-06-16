import Vue from 'vue'
import root from './root.vue'
import ElementUI, {
  Button,
  Select
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import firebase from '../service/firebase'
import Vuefire from 'vuefire'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(Vuefire)
Vue.use(firebase)
/* eslint-disable no-new */
new Vue({
  el: '#root',
  firebase: {
    can: firebase.database.ref('jogos')
  },
  render: h => h(root)
})