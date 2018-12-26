<template>
  <div class="cart">
    <h2>您的购物车</h2>
    <p v-if="!products.length"><i>购物车空了!!!</i></p>
    <table v-else>
        <thead>
            <tr>
              <th>序号</th>
              <th>商品名称</th>
              <th>商品价格</th>
              <th>商品数量</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product,index) in products" :key="product.id">
                <td>{{index+1}}</td>
                <td> {{ product.title }}</td>
                <td> {{ product.price | currency }} </td>
                <td> {{ product.quantity }}</td>
            </tr>
        </tbody>
    </table>
    <hr>
    <p>总消费: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">清空购物车</button></p>
    <p v-show="checkoutStatus">{{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>
<style scoped>
  .chart{
    width:600px;
    margin:0 auto;
  }
</style>
