<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/quem_eu_sou">Quem eu sou</router-link> |
    <router-link to="/que_eu_faco">O que eu faco</router-link> |
    <router-link to="/hobbies">Hobbies</router-link>
  </nav>
  
  <router-view/>
  <br><br>
  <Footer/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import Footer from './views/Footer.vue';

export default { name: 'App', components: { HelloWorld, Navbar, Footer } };

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav { 
  padding: 30px; 
  background-color: #f8f9fa; /* Fundo cinza */ 
  a { font-weight: bold; color: #2c3e50; &.router-link-exact-active { color: #42b983; } } 
}

img { 
  width: 500px; height: auto; 
}
</style>

