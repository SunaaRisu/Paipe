<script setup>

</script>

<template>
    <nav>
        <div id="blContainer">
            <div id="burger">
                <div class="burgerLine" id="b1"></div>
                <div class="burgerLine" id="b2"></div>
                <div class="burgerLine" id="b3"></div>
            </div>
            <div id="logo"><a href="https://stream.sunaarisu.de"><img src="https://srcsrv.sunaarisu.de/sunaarisu.de/img/Risu-Logo-White.svg" alt="RISU Logo"></a></div>
        </div>
        <div id="searchbar">
            <form action="">
                <input type="text">
                <button type="submit">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="39" r="22.5" stroke="#EBEFBF" stroke-width="5"/>
                    <line x1="50.7365" y1="54.2015" x2="79.7365" y2="82.2015" stroke="#EBEFBF" stroke-width="5"/>
                    </svg>
                </button>
            </form>
        </div>
        <div id="account">
            <div id="loginBtn">
                <span>LOGIN</span>
            </div>
        </div>
    </nav>  
    <div id="loadingBar"></div>
</template>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-content: center;
        height: 50px;
        background-color: var(--color-background);
    }
    #blContainer{
        display: flex;
    }
    #burger{
        height: 100%;
        width: 50px;
    }
    .burgerLine{
        height: 2px;
        width: 20px;
        border-radius: 1px;
        position: absolute;
        left: 15px;
        background-color: var(--color-text);
    }
    #burger:hover .burgerLine{
        height: 3px;
        width: 22px;
        border-radius: 1.5px;
        left: 14px;
    }    
    #b1{
        top: 18px;
    }
    #burger:hover #b1{
        top: 16px;
    }
    #b2{
        top: 24px;
    }
    #burger:hover #b2{
        top: 24px;
    }
    #b3{
        top: 30px;
    }
    #burger:hover #b3{
        top: 32px;
    }
    #logo{
        height: 100%;
        width: 50px;
    }
    #logo img{
        width: 100%;
        height: 100%;
    }
    #logo a{
        cursor: default;
    }
    #searchbar{
        height: 100%;
        width: 500px;
    }
    #searchbar input{
        border-radius: 10px 0px 0px 10px;
        width: 90%;
        height: 30px;
        background-color: var(--color-background-lighter);
        color: var(--color-text);
        border: none;
        padding-left: 10px;
        font-size: medium;
        /* border: 1px var(--color-accent) solid; */
    }
    #searchbar input:hover{
        background-color: var(--color-background-light);
    }
    #searchbar input:focus{
        outline: none;
        background-color: var(--color-background-light);
    }
    #searchbar button{
        height: 30px;
        width: 10%;
        border: none;
        padding: 0;
        background-color: var(--color-background-lighter);
        border-radius: 0px 10px 10px 0px;
        border-left: 2px solid var(--color-background);
        display: flex;
        align-items: center;
    }
    #searchbar button:hover{
        background-color: var(--color-background-light);
    }
    #searchbar button svg{
        height: 90%;
        width: 90%;
    }
    #searchbar form{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #account{
        height: 100%;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #loginBtn{
        height: 60%;
        width: 90%;
        background-color: var(--color-primary);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-inverted);
    }
    #loginBtn:hover{
        background-color: var(--color-primary-darker);
    }
    #loginBtn span{
        font-weight: bold;
        font-size: larger;
    }
    #loadingBar{
        background-color: var(--rs-c-thistle);
        height: 2px;
    }
</style>