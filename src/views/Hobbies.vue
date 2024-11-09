<template>
    <div class="Hobbies">
      <h1>Hobbies</h1>
      <!-- <img alt="Emerson home photo" src="@/assets/emerson_profile.jpg"> -->
       <HobbiesText />
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
    import HobbiesText from '@/components/HobbiesText.vue';
  @Options({ components: { HobbiesText } })
  export default class HomeView extends Vue {}
  </script>
  
  <style>

  </style>