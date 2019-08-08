<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/learn">课程学习</router-link> |
      <router-link to="/student">学员展示</router-link> |
      <router-link to="/community">社区</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="./assets/logo.png" alt="">
        </div>
        <div class="nav">
          <router-link tag="li" to="/">Home</router-link> |
          <router-link tag="li" to="/learn">课程学习</router-link> |
          <router-link tag="li" to="/student">学员展示</router-link> |
          <router-link tag="li" to="/community">社区</router-link> |
          <router-link tag="li" to="/about">About</router-link>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
