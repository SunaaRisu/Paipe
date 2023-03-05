<script setup>

    import { onBeforeRouteUpdate, useRoute } from 'vue-router';
    import { ref, onUpdated } from 'vue';
    const route = useRoute();
    const search = ref("");
    
    onUpdated(() => {
        search.value = route.query.search;
    })

    search.value = route.query.search;




        

</script>

<template>    
    <p>No result for " {{ search }}"</p>
</template>