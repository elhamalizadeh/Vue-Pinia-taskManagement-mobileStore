<template>
  <div class="container mb-5">
    <h1>products</h1>
    <div class="row align-items-center">
    <div v-for= "product in ProductList" :key = product.id class="col-md-3 me-3 mt-3"> 

      <div class="card" style="width: 18rem;">
  <img :src="product.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.description }}</p>
    <a href="#" class="btn btn-primary" @click="AddToCart(product)">Add To Cart</a>
  </div>
</div>
    </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../store/products'
import { useCartStore } from '../store/cart'
import { computed } from "vue"
export default {
name:'productsList',

setup(){
  const ProductStore = useProductStore();
  const cartStore = useCartStore();


  const ProductList = computed(()=>ProductStore.AllProducts)

  // function getProducts(){
  //   Products.AllProducts
  // }
  // getProducts();

  function AddToCart(product){
    cartStore.addToCartAction(product)

  }

return{ ProductList, AddToCart }
}
}
</script>
<style>
</style>
