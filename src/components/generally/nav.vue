<script setup>

</script>

<template>
    <nav>
        <div id="blContainer">
            <div id="burger">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="b3"></div>
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
        <div id="account"></div>
    </nav>  
    <div id="seperator"></div>
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
    #burger:hover{
        background-color: var(--color-background-light);
    }
    #b1,#b2,#b3{
        height: 2px;
        width: 20px;
        position: absolute;
        left: 15px;
        background-color: var(--color-text);
    }
    #b1{
        top: 18px;
    }
    #b2{
        top: 24px;
    }
    #b3{
        top: 30px;
    }
    #logo{
        height: 100%;
        width: 50px;
    }
    #logo img{
        width: 100%;
        height: 100%;
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
        /* border: 1px var(--color-accent) solid; */
    }
    #searchbar input:hover{
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
    }
    #searchbar button:hover{
        background-color: var(--color-background-light);
    }
    #searchbar button svg{
        height: 100%;
        width: 100%;
    }
    #searchbar form{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #account{
        margin-left: 50px;
        height: 100%;
        width: 50px;
    }
    #seperator{
        background-color: var(--rs-c-thistle);
        height: 2px;
    }
</style>