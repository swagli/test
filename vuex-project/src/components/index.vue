<template>
  <div id="app">
    <sonOne ></sonOne>
    <sonTwo ></sonTwo>
    <hr>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>
<script>
import sonOne from  './sonOne';
import sonTwo from './sonTwo';
import ProductList from './productList'
import ShoppingCart from './shoppingCart'
export default {
  name: "app",
  data() {
    return {

    };
  },
  components:{
    sonOne,sonTwo,
    ProductList, ShoppingCart
  }
};
</script>
<style scoped>
</style>
