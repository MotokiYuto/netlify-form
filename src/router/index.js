import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubPage from '../views/SubPage.vue'
import UserList from '../views/UserList.vue'

Vue.use(VueRouter)











const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sub-page',
    name: 'SubPage',
    component: SubPage
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList,
    beforeEnter: (to, from, next) => {
      if ('redirect' in to.query && to.query.redirect) {
        alert('君はダメ！');
        next({name: 'Home'});
      } else {
        alert('君は良いよ！');
        next();
      }
    }
  }
]









const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router