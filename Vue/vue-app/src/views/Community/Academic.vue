<template>
    <ul class="academic">
        <router-link 
        tag="li" 
        :to="{name:'question', params: {id: question.questionId}}"
        v-for="question in questionList" 
        :key="question.questionId">
            {{question.title}}
        </router-link>
    </ul>
</template>

<script>
export default {
  // 组件内守卫
  beforeRouteEnter (to, from, next) {
    // const isLogin = to.matched[0].meta.login;
    console.log(to)
    // if(isLogin) {
    //   next();
    //   return
    // }
    const isLogin = to.matched[0].meta.login;
    if(isLogin) {
      next();
      return
    }
    const answer = confirm('请登录账号后查看～')
          if(answer) {
            next()
          }else {
            next(false)
          }
  },
  beforeRouteLeave(to, from, next) {
    const answer = confirm('确定要离开吗？')
    if(answer) {
      next()
    }else {
      next(false)
    }
  },
  data() {
    return {
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  }
};
</script>

<style scoped>

    li {
        line-height: 20px;
        margin-top: 20px;
    }
</style>