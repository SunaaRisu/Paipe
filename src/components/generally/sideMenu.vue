<script setup>
    
</script>

<template>
    <nav v-show="this.$store.state.viewData.sideMenu">
        <div id="navBtns">
            <div id="homeBtnLogo" class="sideMenuBtn">
                <svg width="30" height="30" viewBox="0 0 95 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7986 34.64V98H38.6528V71.12H56.3472V98H77.2014V34.64M2 51.28L47.5 2L93 51.28" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                </svg>
                <span>Home</span>
            </div>
            <div id="libaryBtnLogo" class="sideMenuBtn">
                <svg width="30" height="30" viewBox="0 0 54 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 60H1.5V1.5H52.5V60H24.5M12.5 60V74L18.5 68.5L24.5 74V60M12.5 60H24.5M13.5 11.5H41V26.5H13.5V11.5Z" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                </svg>
            </div>
            <div id="notificationBtnLogo" class="sideMenuBtn"></div>
            <div id="watchHistoryBtnLogo" class="sideMenuBtn"></div>
        </div>
        <div id="termAndPrivacy">
            <a href="https://sunaarisu.de/privacy">Privacy</a>
        </div>
    </nav>
</template>

<style scoped>
    nav{
        height: calc(100vh - 52px);
        width: 70px;
        border-right: 1px solid var(--rs-c-thistle);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    nav:hover{
        width: 250px;
        align-items: flex-start;
    }
    nav:hover .sideMenuBtn span{
        display: flex;
    }
    nav:hover .sideMenuBtn{
        width: 250px;
    }
    .sideMenuBtn{
        height: 70px;
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sideMenuBtn span{
        display: none;
    }
    #homeBtnLogo{
        margin-top: 30px;       
    }
    .sideMenuBtn:hover svg{
        width: 40px;
        height: 40px;
    }
    .sideMenuBtn:hover svg path{
        stroke-width: 8px;
    }
    #termAndPrivacy{
        margin-bottom: 30px;    
        width: 70px;
        display: flex;
        justify-content: center;    
    }
    #termAndPrivacy a{
        color: var(--color-text);
        font-size: small;
        text-decoration: none;
    }
</style>