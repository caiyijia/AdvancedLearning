import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // 公共数据池
    name: 'Yijia',
    age: 20,
    look: 'Handsome',
    studentList: []
  },
  getters: {
    // 相当于计算属性
    newStudent(state) {
      return state.studentList.map((item, index) => {
        if(index == 0) {
          return '** ' + item
        }else if(index < 3) {
          return item + ' ** '
        }else {
          return '++' + item + '++'
        }
      })
    }
  },
  mutations: {
    changeStudent(state, {name, number}) {
      // setTimeout(() => {
        state.studentList.push(name + '-'+ number);
      // },1000);
    }
  },
  actions: {
    changeStudent(ctx, {name, number}) {
      setTimeout(() => {
        ctx.commit('changeStudent', {name, number})        
      }, 1000);
    }
  }
})
