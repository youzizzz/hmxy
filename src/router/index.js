import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Content from '@/components/Content'
import register from '@/components/Register'
Vue.use(Router)
const router = new Router({
  mode:'history',
  base: '/history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title: "IT峰汇-聚集最新业内峰汇资讯"
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/register',
      name: 'Register',
      component: register,
      meta:{
        title:"登录注册"
      }
    }
  ]
})
router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
})

export default router
