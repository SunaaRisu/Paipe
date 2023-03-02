<script setup>
    
</script>

<template>
    <nav v-show="this.$store.state.viewData.sideMenu">
        <a href="https://sunaarisu.de/privacy">Privacy</a>
    </nav>
</template>

<style scoped>
    nav{
        height: calc(100vh - 52px);
        width: 300px;
        border-right: 1px solid var(--rs-c-thistle);
    }
</style>