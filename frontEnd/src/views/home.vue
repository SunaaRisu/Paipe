<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goToStream(x){
        router.push({ path: '/watch/' + x});
    }
</script>

<template>
    <main>
        <div class="streamPreview" @click="goToStream(1)">
                <img src="/thumbnail.png" alt="Cats">
                <span>NomNom Cats</span>    
        </div>
        <div class="streamPreview" @click="goToStream(2)">
                <img src="/thumbnail2.png" alt="Cats" style="width: 40%;">
                <span>Jkob Cats</span>    
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