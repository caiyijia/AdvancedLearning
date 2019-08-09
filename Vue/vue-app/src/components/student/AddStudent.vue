<template>
<div>
    添加学生：
    <input type="text" v-model="name">
    <button @click="add">确认添加</button>
</div>

</template>

<script>
export default {
    data() {
        return {
            name:''
        }
    },
    methods: {
        add() {
            // this.$emit('add', this.name)
            // console.log(this.bus);
            this.bus.$emit('add', this.name)
            
        }
    },
}
</script>

<style scoped>
button {
    margin-left: 20px;
    line-height: 25px;
    width: 58px;
}
</style>