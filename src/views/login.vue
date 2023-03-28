<script setup>

</script>

<template>
    <main>
        <div class="dialogContainer">
            <div class="logo"><img src="/logo.svg" alt="Paipe Logo"><span>PAIPE</span></div>
            <div class="formContainer">
                <form action="" method="post">
                    <input type="text">
                    <input type="password" name="pwd" id="">
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .dialogContainer{
        width: 300px;
        height: fit-content;
        background-color: var(--color-background-lighter);
        border-radius: 10px;
        padding: 20px;
    }
    .logo{
        height: 100px;
        display: flex;
        align-items: center;
    }
    .logo img{
        height: 100%;
    }
    .logo span{
        font-size: 100px;
        margin-left: 25px;
    }
</style>