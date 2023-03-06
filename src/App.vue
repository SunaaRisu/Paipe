<script setup>
  import { RouterView } from 'vue-router';

  import Nav from './components/generally/nav.vue'
  import SideMenu from './components/generally/sideMenu.vue'
</script>

<template>
  <div id="verticalContainer">
    <Nav></Nav>
    <div id="mainWindow">
        <SideMenu id="sideMenu"></SideMenu>
        <RouterView id="routerView" />
    </div>
  </div>
  

</template>

<style scoped>
  #verticalContainer{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  /* Nav{
    flex: 0 1 auto;
  } */
  #mainWindow{
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
  }
  #sideMenu{
    flex: 0 1 auto;
  }
  #routerView{
    flex: 1 1 auto;
  }
</style>