import Vue from 'vue'
import Vuex from 'vuex'
import student from './modules/student';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // 公共数据池
    name: 'Yijia',
    age: 20,
    look: 'Handsome',
  },
  modules: {
    student
  }
})
