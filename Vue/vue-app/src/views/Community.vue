<template>
<div>
<div class="nav">
        <routerLink :to="{name: 'academic'}">学术讨论</routerLink> | 
        <routerLink :to="{name: 'download'}">资源下载</routerLink> | 
        <routerLink :to="{name: 'personal'}">个人中心</routerLink>
    </div>
    <router-view></router-view>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.nav a {
    display: inline-block;
    padding: 0 10px;
    margin: 0 10px;
}

.active-exact {
    background-color: #f40;
    color: #fff;
    /* border-radius: 10px; */
}
/* .router-view {
  padding-top: 20px;
  padding-left: 20px;
} */
</style>