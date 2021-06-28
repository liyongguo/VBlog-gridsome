import Vue from 'vue'
import Vuex from 'vuex'
import token from './modules/token'
import user from './modules/user'
import tab from './modules/tab'
import configuration from './modules/configuration'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        token,
        user,
        tab,
        configuration
    },
    getters
})

export default store
