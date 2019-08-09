<template>
    <div>
        <!-- <add-student @add="add"></add-student>
        <student-list :student-list="studentList"></student-list> -->
        <add-student ></add-student>
        <student-list></student-list>
    </div>

</template>

<script>
// @代表src文件夹
import AddStudent from '@/components/student/AddStudent.vue'
import StudentList from '@/components/student/StudentList.vue'
export default {
    components: {
        AddStudent,
        StudentList
    },
    data () {
        return {
            studentList: []
        }
    },
    methods: {
        add(name) {
            this.studentList.push(name);
        }
    },
}
</script>

<style>

</style>