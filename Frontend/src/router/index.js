import Vue from 'vue'
import Router from 'vue-router'
import store from '../common/store/store'
import Index from '@/components/Index'
import Articles from '@/components/Articles'
import Detail from '@/components/common/Articles-detail'
import Projects from '@/components/Projects'
import Login from '@/components/manager/auth/login'
import Users from '@/components/users/users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/Articles/Detail=:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Login
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/user',
      name: 'User',
      component: Users,
      meta: {
        requireAuth: true
      }
    }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  const token = store.state.token
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      console.log('该页面需要登录')
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
export default router
