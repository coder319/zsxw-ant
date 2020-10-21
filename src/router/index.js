import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sort from "../views/Sort";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Register from "../views/Register";
import ChapterList from "../views/ChapterList";
import Chapter from "../views/Chapter";
import SearchResult from "../views/SearchResult";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/searchResult/:value',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/chapterList/:novelName/:novelId',
      name: 'ChapterList',
      component: ChapterList
    },
    {
      path: '/chapter/:chapterName/:chapterId',
      name: 'Chapter',
      component: Chapter
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sort/:categoryId',
      Name: 'Sort',
      component: Sort
    },
    {
      path: '/login',
      Name: 'Login',
      component: Login
    },
    {
      path: '/register',
      Name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      Name: 'Profile',
      component: Profile,
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
