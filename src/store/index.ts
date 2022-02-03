// @ts-ignore
import { createStore } from 'vuex'
import { getDeviceType } from '../utils/deviceInfo'

const defaultState = {
  count: 0,
  deviceType: getDeviceType(),
  windowSize: {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  }
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    setDeviceType(state: typeof defaultState) {
      state.deviceType = getDeviceType()
    },
    setWidowSize(state: typeof defaultState) {
      state.windowSize.height = document.documentElement.clientHeight
      state.windowSize.width = document.documentElement.clientWidth
    },
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context: { commit: (arg0: string) => void }) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
