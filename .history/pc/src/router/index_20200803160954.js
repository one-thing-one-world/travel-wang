import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home.vue";
import {
  cache
} from '@/services/cache'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

let whitePath = ['/login']

router.beforeEach(async (to, from, next) => {
  let user = await cache.getItem("user")

  if (whitePath.includes(to.path)) {
    next()
  } else {
    user ? next() : next('/login')
  }
})

export default router;
