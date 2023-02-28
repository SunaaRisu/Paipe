<script setup>

</script>

<template>
    <nav>
        <div id="burger"></div>
        <div id="logo"></div>
        <div id="searchbar">
            <form action="">
                <input type="text">
            </form>
        </div>
        <div id="account"></div>
    </nav>
</template>

<style scoped>
    nav{
        display: flex;
        align-content: center;
        height: 50px;
    }
    #burger{
        height: 100%;
        width: 50px;
    }
    #logo{
        height: 100%;
        width: 50px;
    }
    #searchbar{
        height: 100%;
        width: 300px;
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
        width: 50px;
    }
</style>