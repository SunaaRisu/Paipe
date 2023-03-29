<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const video = ref('');

if(route.path == '/watch/1'){
    video.value = '/test.mp4';
}else if(route.path == '/watch/2'){
    video.value = '/test2.mp4';
}

    
</script>

<template>
    <main>
        <video :src="video" controls loop autoplay muted>

        </video>
    </main>
</template>

<style scoped>
    video{
        height: 80vh;
        width: 90vw;
    }
</style>