import {
    HEADBAR_SHOW,
    HEADBAR_HIDE,
    FOOTBAR_SHOW,
    FOOTBAR_HIDE
} from './types'

const mutations = {
    [HEADBAR_SHOW](state) {
        state.headBarShow = true
    },
    [HEADBAR_HIDE](state) {
        state.headBarShow = false
    },
    [FOOTBAR_SHOW](state) {
        state.footBarShow = true
    },
    [FOOTBAR_HIDE](state) {
        state.footBarShow = false
    }
}

export default mutations