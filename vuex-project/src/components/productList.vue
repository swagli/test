<template>
  <div>
    <table>
       <thead>
          <tr>
             <th>序号</th>
             <th>商品名称</th>
             <th>商品价格</th>
             <th>操作</th>
          </tr>
       </thead>
       <tbody>
           <tr v-for="(product,index) in products" :key="product.id">
               <td>{{index+1}}</td>
               <td>{{product.title }}</td>
               <td>{{product.price | currency }}</td>
               <td><button :disabled="!product.inventory" @click="addProductToCart(product)">加入购物车</button></td>
            </tr>
       </tbody>
    </table>
   </div>
</template>

<script>
//state和actions的辅助函数和mapGetter类似
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
     'addProductToCart'
  ]),
  created () {
     this.$store.dispatch('products/getAllProducts')
  }
}
</script>
<style lang="">
    table{
        width:100%;
        empty-cells:show;
        margin-top:20px;
    }
    th,td{
        height: 40px;
        /* padding: 8px 10px; */
        border: 1px solid  #e2dbdb;
        text-align: center;
        padding: 0 5px;
        background:#fff;
    }
    th{
        height: 45px;
        background: #e7e5e5;
        color: #5c6b77;
        font-weight: 600;
        /*padding: 10px 5px;*/
        font-size: 15px;
        white-space: nowrap;
    }
</style>
