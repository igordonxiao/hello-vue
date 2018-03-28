import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
const Category = () => import('@/components/Category')
const Index = () => import('@/components/Index')
const Tag = () => import('@/components/Tag')
const About = () => import('@/components/About')
// const Article = () => import('@/components/Article')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/tag',
          name: 'Tag',
          component: Tag
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/article',
          name: 'Article',
          component: Article
        }
      ]
    }
  ]
})
