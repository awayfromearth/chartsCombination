import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "酷屏首页统计图"
      }
    },
    {
      path: "/brand",
      name: "Brand",
      component: () => import("@/views/Brand.vue"),
      meta: {
        title: "公司品牌介绍",
      }
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router