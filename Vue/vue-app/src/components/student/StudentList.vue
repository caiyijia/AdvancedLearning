<template>
    <div>学生列表:
        <ul>
            <li v-for="(item, index) in studentList"
                :key="item+index"
            >
            {{index+1}} - {{item}}
            </li>
        </ul>
    </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    // props: ['student-list'],
    data () {
        return {
            // studentList: []

        }
    },
    computed: {
        ...mapState('student', ['studentList']),
        // ...mapGetters(['newStudent'])
        ...mapGetters('student', {
            student: 'newStudent'
        })
        // newStudent() {
        //     return this.$store.getters.newStudent
        // }
    },
    created() {
        this.bus.$on('add', name => {
            this.studentList.push(name);
        })
    },
}
</script>

<style scoped>

</style>