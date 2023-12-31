import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Cookies from 'js-cookie'
import store from './store'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import Element from 'element-ui'
import './permission' // permission control

import './assets/icons' // icon
Vue.config.productionTip = false

Vue.use(Element, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
