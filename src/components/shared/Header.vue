<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BonitaDM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link  class="nav-link active" aria-current="page" :to="{name:'HomePage'}">Home</router-link >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'tasks'}">Tasks</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'products'}">
            Products
          </router-link>
        </li>
      </ul>
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
         <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link :to="{name:'cart'}" class="nav-link p-1 me-3">
            <span class="badge rounded-pill bg-primary me-1">{{ countCartItems }}</span>
            <i class="bi bi-basket-fill"></i>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import { useCartStore } from '../../store/cart'
import { computed } from "vue"

export default {
name: 'HeaderSection',

setup(){

  const cartStore = useCartStore();
    const countCartItems = computed(()=>cartStore.count)



  return { countCartItems }
}
}
</script>

<style>

</style>