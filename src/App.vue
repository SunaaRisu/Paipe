<script setup>
  import { RouterView } from 'vue-router';

  import Nav from './components/generally/nav.vue'
  import SideMenu from './components/generally/sideMenu.vue'
</script>

<template>
  <Nav></Nav>
  <SideMenu></SideMenu>
  <RouterView />
</template>