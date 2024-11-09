<template>
  <div class="home">
    <h1>Olá, eu sou Emerson.<br> Bem vindo ao meu website :)</h1>
    <img class="Emerson_profile" alt="Emerson_profile" src="@/assets/emerson_profile.jpg">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


export default class HomeView extends Vue {}
</script>

<style scoped>
.Emerson_profile { 
  width: 300px; height: auto; 
}
</style>