<script setup>
    import { useRoute, useRouter, RouterLink } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';


    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const link = route.query.link;
    var linkString = ref('');
    var websiteSecurity = false;

    store.commit('toggleSideMenu')


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


    onMounted(() => {
        let btn1 = document.getElementById("btn1").offsetWidth;
        document.getElementById("btn2").style.width = btn1 + "px";
    })
    
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
        <div id="btnContainer">
            <div class="Btn" id="btn1" @click="goToLink()">
                <span>Go to "{{ linkString }}"</span>
            </div>

            <div class="Btn" id="btn2" @click="router.go(-1)">
                <span>Go Back</span>
            </div>
        </div>
 
    </main>
    
</template>

<style scoped>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2{
        color: var(--color-secondary);
    }
    #btnContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .Btn{
        background-color: var(--color-primary);
        padding: 20px;
        border-radius: 20px;
        margin-top: 50px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Btn:hover{
        background-color: var(--color-primary-darker);
    }
    .Btn span{
        color: var(--color-text-inverted);
        font-weight: bold;

    }
</style>