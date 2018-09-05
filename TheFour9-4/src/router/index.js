import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import Index from '@/page/Index'
import News from '@/page/news/News'
import NewsItem from '@/page/news/NewsItem'
import home from '@/page/home'
import one from '@/page/homeA/one'
import two from '@/page/homeA/two'
import three from '@/page/homeA/three'
import Movies from '@/page/movies/movies'
import MovieMore from '@/page/movies/moviemore'
import movieDetail from '@/page/movies/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
          children: [
            {
              path: '/index',
              name: 'transition_router',
              component: r => require.ensure([], () => r(require('../../docs/transition_router.md')))
            },
            {
              path: '/v-for',
              name: 'v-for',
              component: r => require.ensure([], () => r(require('../../docs/v-forbegood.md')))
            },
            {
              path: '/vue_less',
              name: 'vue_less',
              component: r => require.ensure([], () => r(require('../../docs/vue_less.md')))
            },
            {
              path: '/vue_markdown_loder',
              name: 'vue_markdown_loder',
              component: r => require.ensure([], () => r(require('../../docs/vue_markdown_loder.md')))
            },
            {
              path: '/vuecreate',
              name: 'vuecreate',
              component: r => require.ensure([], () => r(require('../../docs/vuecreate.md')))
            },
            {
              path: '/vuex',
              name: 'vuex',
              component: r => require.ensure([], () => r(require('../../docs/vuex.md')))
            },
            {
              path: '/web_vue',
              name: 'web_vue',
              component: r => require.ensure([], () => r(require('../../docs/web_vue.md')))
            }
          ]
        },
      ]
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/home/one',
          name: 'one',
          component: one
        },
        {
          path: '/home/two',
          name: 'two',
          component: two
        },
        {
          path: '/home/three',
          name: 'three',
          component: three
        },
      ]
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/NewsItem',
      name: 'NewsItem',
      component: NewsItem
    },
    {
      path: '/MovieMore',
      name: 'MovieMore',
      component: MovieMore
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    },
  ]
})
