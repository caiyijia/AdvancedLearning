export default {
    namespaced: true,
    state: {
        studentList: []
    },
    getters: {
        newStudent(state) {
            return state.studentList.map((item, index) => {
                if (index == 0) {
                    return '** ' + item
                } else if (index < 3) {
                    return item + ' ** '
                } else {
                    return '++' + item + '++'
                }
            })
        }
    },
    mutations: {
        changeStudent(state, {
            name,
            number
        }) {
            // setTimeout(() => {
            state.studentList.push(name + '-' + number);
            // },1000);
        }
    },
    actions: {
        changeStudent(ctx, {
            name,
            number
        }) {
            setTimeout(() => {
                ctx.commit('changeStudent', {
                    name,
                    number
                })
            }, 1000);
        }
    }
}