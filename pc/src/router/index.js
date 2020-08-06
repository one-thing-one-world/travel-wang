import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home.vue";

import layout from '@/views/layout.vue'
import {
  cache
} from '@/services/cache'
Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: home,
        meta: {
          title: "主页"
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/register.vue'),
        meta: {
          title: "注册"
        }
      },
      {
        path: 'managerList',
        name: 'managerList',
        component: () => import('../views/managerList.vue'),
        meta: {
          title: "管理员列表"
        }
      }



    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      title: "登录"
    }
  },
  {
    path: '/err',
    name: 'err',
    component: () => import('../views/err.vue'),
    meta: {
      title: "错误页面"
    }
  },
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

let whitePath = ['/login']
let whitePathCommon = ['/register', '/managerList']

router.beforeEach(async (to, from, next) => {
  let user = await cache.getItem("user")

  document.title = to.meta.title
  if (whitePath.includes(to.path)) {
    next()
  } else {

    if (user) {
      let isAdmin = await cache.getItem('isAdmin')
      if (isAdmin) {
        next()
      } else {
        if (whitePathCommon.includes(to.path)) {
          next('/err')
        } else {
          next()
        }
      }
    } else {
      next('/login')
    }
  }
})

export default router;
