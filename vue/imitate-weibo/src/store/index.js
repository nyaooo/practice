import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    headBarShow: true,
    footBarShow: true
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store