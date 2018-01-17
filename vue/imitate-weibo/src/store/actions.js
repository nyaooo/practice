import * as types from './types'

export default {
  /* 顶部head */
  showHeadBar: ({
    commit
  }) => {
    commit(types.HEADBAR_SHOW)
  },
  hideHeadBar: ({
    commit
  }) => {
    commit(types.HEADBAR_HIDE)
  },
  /* 底部导航 */
  showFootBar: ({
    commit
  }) => {
    commit(types.FOOTBAR_SHOW)
  },
  hideFootBar: ({
    commit
  }) => {
    commit(types.FOOTBAR_HIDE)
  }
}
