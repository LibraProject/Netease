import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import topic from './modules/topic'
import catalog from './modules/catalog'
import good from './modules/good'
import cart from './modules/cart'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login,
    topic,
    catalog,
    good,
    cart
  }
})
