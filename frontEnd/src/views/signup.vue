<script setup>
import { onUpdated, ref } from 'vue';


    const username = ref('');    
    const email = ref('');
    const emailErr = ref('');
    const password = ref('');
    
    const passwordErrLenght = ref(false);
    const passwordErrUpperCase = ref(false);
    const passwordErrLowerCase = ref(false);
    const passwordErrSpecial = ref(false);
    const passwordErrNumbers = ref(false);

    const conPassword = ref('');
    const conPasswordErr = ref('');
    

    onUpdated(() => {
        if (email.value != '' && !email.value.includes('@')){
            emailErr.value = 'Pleas enter a valid email address'
        }else{
            emailErr.value = ''
        }

            if (password.value.length <= 15) {
   
                passwordErrLenght.value = true;           
            }else {
                passwordErrLenght.value = false;           
            }

            if (!/\d/.test(password.value)){

                passwordErrNumbers.value = true;              
            }else {
                passwordErrNumbers.value = false;              
            }

            if (!/[a-z]/.test(password.value)) {

                passwordErrLowerCase.value = true;
            }else {
                passwordErrLowerCase.value = false;
            }

            if (!/[A-Z]/.test(password.value)) {

                passwordErrUpperCase.value = true;
            }else {
                passwordErrUpperCase.value = false;
            }

            if (!/[!-\/:-@[-`{-~]/.test(password.value)) {

                passwordErrSpecial.value = true;
            }else {
                passwordErrSpecial.value = false;
            }

        if (password.value != '' && conPassword.value != '' && password.value != conPassword.value){
            conPasswordErr.value = 'Passwords do not match';
        }else{
            conPasswordErr.value = '';
        }
    })

    function signupSubmit(){
        
    }
</script>

<template>
    <main>
        <div class="sign_up_container">
            
                <RouterLink to="/">
                    <img src="/logo.svg" alt="Paipe Logo" height="100">
                </RouterLink>
                
            
            <form @submit.prevent="$event => signupSubmit()">
                <div class="sign_up_form_control">
                    <input type="text" name="username" required placeholder="Username" v-model="username">
                    
                    <p></p>
                </div>
                <div class="sign_up_form_control">
                    <input type="email" name="email" required placeholder="Email" v-model="email">
                    
                    <p>{{emailErr}}</p>
                </div>
                <div class="sign_up_form_control">
                    <input type="password" name="password" required placeholder="Password" v-model="password">
                    
                    <div class="spanContainer">
                        <span v-show="passwordErrLenght">15 characters, </span>  
                        <span v-show="passwordErrUpperCase">upper case, </span>  
                        <span v-show="passwordErrLowerCase">lower case, </span>  
                        <span v-show="passwordErrSpecial">special characters, </span>  
                        <span v-show="passwordErrNumbers">numbers</span>  
                    </div>
                    
                </div>
                <div class="sign_up_form_control">
                    <input type="password" name="conPassword" required placeholder="Confirm Password" v-model="conPassword">
                    
                    <p>{{ conPasswordErr }}</p>
                </div>
                <button class="sign_up_btn" type="submit" name="submit"><strong>Sign Up</strong></button>
            </form>
            <div class="form_footer">
                <RouterLink to="/login"><p>Have an account yet?</p></RouterLink>
                <a href="https://sunaarisu.de/privacy">Privacy</a>
            </div>
        </div>
        
    </main>
</template>



<style scoped>
    main{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sign_up_container {
        background-color: var(--color-background-lighter);
        padding: 20px 40px;
        border-radius: 10px;
    }

    .sign_up_container img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-bottom: 50px;
    }

    .sign_up_btn {
        cursor: pointer;
        display: inline;
        width: 100%;
        background: var(--rs-c-cream);
        padding: 15px;
        font-family: inherit;
        font-size: 16px;
        border: 0;
        border-radius: 5px;
        margin-top: 20px;
    }

    .sign_up_btn:hover{
        background: var(--color-primary-darker);
    }

    .sign_up_btn:focus {
        outline: 5px solid var(--color-primary-darker);
        background: var(--rs-c-cream);
        transform: scale(5px);
    }

    .sign_up_form_control {
        position: relative;
        width: 300px;
    }

    .sign_up_form_control a{
        font-size: 12px;
        color: var(--rs-c-cream);
    }

    .sign_up_form_control a:hover{
        color: var(--blue_hover);
    }

    .sign_up_form_control p{
        font-size: 12px;
        height: 12px;
        margin-top: 6px;
        margin-bottom: 12px;
        color: var(--error);
    }

    .sign_up_form_control .p_info{
        font-size: 12px;
        height: 20px;
        margin-top: 6px;
        margin-bottom: 0px;
        color: var(--white);
    }

    .sign_up_form_control .p_error{
        font-size: 12px;
        height: 20px;
        margin-top: 6px;
        margin-bottom: 18px;
        color: var(--error);
    }

    .spanContainer{
        height: 12px;
        margin-top: 6px;
        margin-bottom: 12px;
    }

    .spanContainer span{
        font-size: 12px;
        margin-right: 3px;
    }

    .sign_up_form_control input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px var(--rs-c-cream) solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: var(--rs-c-cream);
        
    }

    .sign_up_form_control input:focus,
    .sign_up_form_control input:valid {
        outline: 0;
        border-bottom-color: var(--blue);
    }

    .sign_up_form_control label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
    }

    .sign_up_form_control img{
        width: 25px;
        position: absolute;
        top: 15px;
        right: 0;
        pointer-events: none;
    }

    span{
        font-size: 18px;
        display: inline-block;
        transform: translateY(0px);
        transition: transform 100ms ease-in-out;
    }

    span.fade{
        transform: translateY(-30px);
    }

    .form_footer{
        text-align: center;
        width: 100%;
        padding-top: 20px;
    }

    a{
        color: var(--white);
        text-decoration: none;
        margin-top: 15px;
    }    
</style>