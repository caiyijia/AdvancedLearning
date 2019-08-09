import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      // beforeEnter (to, from, next) {
      //   console.log(to, from)
      //   next(false);
      // }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community'),
      redirect: '/community/academic',
      meta: {
        login: false
      },
      children: [
        {
          path: '/community/academic',
          name: 'academic',
          component: () => import('./views/Community/Academic'),
          // 路由独享守卫
          // beforeEnter (to, from, next) {
          // const answer = confirm('请登录账号后查看～')
          // if(answer) {
          //   next()
          // }else {
          //   next(false)
          // }
          // next();
        // }
        },
        {
          path: '/community/download',
          name: 'download',
          component: () => import('./views/Community/Download')
        },
        {
          path: '/community/personal',
          name: 'personal',
          component: () => import('./views/Community/Personal')
        }
      ]
    },
    {
      path: '/NotFound',
      component: () => import('./views/NotFound')
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('./views/Question')
    },
    {
      path: '*',
      redirect (to) {
        if(to.path === '/') {
          return '/home';
        } else {
          return '/NotFound';
        }
      }
    }
  ]
})
