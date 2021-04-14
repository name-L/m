import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Center from '@/views/Center'
// import Cinema from '@/views/Cinema'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import ErrorComponent from '@/views/ErrorComponent'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Cccc from '@/views/cccc'
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film',
        redirect: '/film/nowplaying'
      }
    ]
  },
  // {
  //   path: "/film/nowplaying",
  //   component: Nowplaying
  // },
  {
    path: '/cinema',
    // component: Cinema
    component: () => import('@/views/Cinema')
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/cccc',
    component: Cccc
  },
  {
    path: '/detail/:Id',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/film'// 重定向
  },
  {
    path: '*',
    component: ErrorComponent
  }
]

const router = new VueRouter({
//   mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/center') {
    if (localStorage.getItem('token')) {
      console.log(11)
      next()
    } else {
      console.log('重定向到 login页面')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
