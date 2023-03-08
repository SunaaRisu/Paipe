<script setup>

    import { useRoute } from 'vue-router';
    import { ref, onUpdated } from 'vue';
    const route = useRoute();
    const search = ref("");
    
    onUpdated(() => {
        search.value = route.query.search;
    })

    search.value = route.query.search;




        

</script>

<template>  
    <main>
        <p>No result for "{{ search }}"</p>
    </main>      
</template>

<style scoped>
    main{
        display: flex;
        justify-content: center;
    }
    p{
        margin-top: 100px;
    }
</style>