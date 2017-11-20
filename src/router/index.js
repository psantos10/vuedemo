import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/recursos',
      name: 'Features',
      component: Features
    },
    {
      path: '/preco',
      name: 'Pricing',
      component: Pricing
    }
  ]
})
