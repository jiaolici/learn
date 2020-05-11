import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NovelComment from '@/components/NovelComment'
import NovelChapter from '@/components/NovelChapter'
import NovelSource from '@/components/NovelSource'
import index from '@/page/index'
import info from '@/page/info'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/info',
      //name:'info',  //当某个路由有子集路由时，该路由需要一个默认的路由且不能定义name属性。。
      component: info,
      children: [
        {
          path: '/',
          component: NovelComment
        },
        {
          path: 'comment',
          name: 'comment',
          component: NovelComment
        },
        {
          path: 'chapter',
          name: 'chapter',
          component: NovelChapter
        },
        {
          path: 'source',
          name: 'source',
          component: NovelSource
        }
      ]
    }
  ]
})
