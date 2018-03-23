import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Articles from '@/components/Articles'
import Detail from '@/components/common/Articles-detail'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
