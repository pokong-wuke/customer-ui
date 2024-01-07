import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import settings from './modules/settings'
import app from './modules/app'
import tagsView from './modules/tagsView'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    settings,
    tagsView,
    permission
  },
  getters
})

export default store
