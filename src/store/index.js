import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      color: '#4287f5',
      text: 'RABABOOM'
    }
  },
  mutations: {
    changeText(state, {color, text}) {
      state.color = color;
      state.text = text;
      console.log(state)
    }
  },
})