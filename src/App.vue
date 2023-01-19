<template>
  <Header msg="Welcome to Your Vue.js App"/>
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
