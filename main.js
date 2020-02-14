import Vue from 'vue'
import App from './App'
import VueClipboard from 'vue-clipboard2'
Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true
App.mpType = 'app'
Vue.use(VueClipboard)
const app = new Vue({
    ...App
})
app.$mount()
