<template>
    <div class="O Que Faco">
      <h1>O que faço...</h1>
      <!-- <img alt="Emerson home photo" src="@/assets/emerson_profile.jpg"> -->
       <OQueFacoTexto />
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import OQueFacoTexto from '@/components/OQueFacoTexto.vue';
  @Options({ components: { OQueFacoTexto } })
  export default class HomeView extends Vue {}
  </script>
  
  <style>
 
  </style>