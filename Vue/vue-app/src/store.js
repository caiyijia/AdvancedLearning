import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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

  },
  actions: {

  }
})
