<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { ref } from 'vue';

    const route = useRoute();
    const link = route.query.link;
    var linkString = ref('');
    var websiteSecurity = false;

    if (link.startsWith('https://www.')) {
        linkString.value = link.slice(12);  
        websiteSecurity = true;      
    }else if (link.startsWith('http://www.')){
        linkString.value = link.slice(11);
    }else if(link.startsWith('www.')){
        linkString.value = link.slice(4);
    }else{
        linkString.value = link;
    }
    
    function goToLink(){
            window.location.href = 'https://www.' + linkString.value;        
    }

</script>

<template>
    <main>
        <h1>U sure u wanna leave this website?</h1>
        <p>We wanna warn u that the internet is a scary place.</p>
        <p>Please only continue if you're sure that "{{ linkString }}" is a website you know or trust.</p>
        <h2 v-if="!websiteSecurity">Warning: This Website may have no encryption. Please do not enter personal data (e.g Bank information, Address, etc.) unless you can confirm that this website has encryption.</h2>
        <RouterLink to="/security/website-encryption" v-if="!websiteSecurity">How to tell if a website has encryption?</RouterLink>
        <div id="continueBtn" @click="goToLink()">
            <span>Go to "{{ linkString }}"</span>
        </div>
    </main>
    
</template>

<style scoped>

</style>