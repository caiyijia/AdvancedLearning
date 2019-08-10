<template>
    <div>学生列表:
        <ul>
            <li v-for="(item, index) in student"
                :key="item+index"
            >
                {{item}}
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
        ...mapState(['studentList']),
        // ...mapGetters(['newStudent'])
        ...mapGetters({
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