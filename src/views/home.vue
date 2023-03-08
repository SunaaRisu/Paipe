<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goToStream(){
        router.push({ path: '/watch/1'});
    }
</script>

<template>
    <main>
        <div class="streamPreview" @click="goToStream()">
                <img src="/thumbnail.png" alt="Cats">
                <span>NomNom Cats</span>    
        </div>
    </main>  
</template>

<style scoped>
    .streamPreview{
        width: 320px;
        height: 180px;
        margin: 20px;
    }
    .streamPreview RouterLink{
        width: 100%;
        height: 100%;
    }
    .streamPreview img{
        width: 100%;
        height: 90%;
    }
</style>