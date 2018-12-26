import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import SonOne from '@/components/sonOne'
import SonTwo from '@/components/sonTwo'
import ProductList from '@/components/productList'
import ShoppingCart from '@/components/shoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {
      path: '/index',
      component: Index,
      children:[
        {path:'/sonOne',component:SonOne},
        {path:'/sonTwo',component:SonTwo},
        {path:'/productList',components:ProductList},
        {path:'/shoppingCart',components:ShoppingCart }
      ]
    }
  ]
})
