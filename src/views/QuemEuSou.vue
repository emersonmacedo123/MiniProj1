<template>
    <div class="Quem Eu Sou">
      <h1>Quem eu sou...</h1>
      <!-- <img alt="Emerson home photo" src="@/assets/emerson_profile.jpg"> -->
       <QuemEuSouTexto />
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import QuemEuSouTexto from '@/components/QuemEuSouTexto.vue';
  @Options({ components: { QuemEuSouTexto } })
  export default class HomeView extends Vue {}
  </script>
  
  <style>
 
  </style>