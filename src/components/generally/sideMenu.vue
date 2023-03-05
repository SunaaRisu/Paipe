<script setup>
    
</script>

<template>
    <nav v-show="this.$store.state.viewData.sideMenu">
        <div id="navBtns">

            <router-link to="/" style="text-decoration: none;">
                <div id="homeBtnLogo" class="sideMenuBtn">
                    <svg width="30" height="30" viewBox="0 0 95 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7986 34.64V98H38.6528V71.12H56.3472V98H77.2014V34.64M2 51.28L47.5 2L93 51.28" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                    </svg>
                    <div class="seperator"></div>
                    <span>Home</span>
                </div>
            </router-link>

            <div id="libaryBtnLogo" class="sideMenuBtn">
                <svg width="30" height="30" viewBox="0 0 54 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 60H1.5V1.5H52.5V60H24.5M12.5 60V74L18.5 68.5L24.5 74V60M12.5 60H24.5M13.5 11.5H41V26.5H13.5V11.5Z" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                </svg>
                <div class="seperator"></div>
                <span>Library</span>
            </div>

            <router-link to="/notifications" style="text-decoration: none;">
                <div id="notificationBtnLogo" class="sideMenuBtn">
                    <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.3868 68.3072L80.6199 81.34H19.3801L25.6132 68.3072L25.7243 67.9854L29.6843 50.1654L29.7126 49.9893L31.3626 33.4893L32.1465 25.6502L37.556 18.34H43.4H50H56.6H62.444L67.8535 25.6502L68.6374 33.4893L70.2874 49.9893L70.3157 50.1654L74.2757 67.9854L74.3868 68.3072Z" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                    <path d="M47.9813 15.66L45.9849 13.6636L44.3719 9.89999L45.8822 6.37591L50 4.31704L54.1177 6.37591L55.628 9.9L54.0151 13.6636L52.0187 15.66H50L47.9813 15.66Z" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                    <path d="M41.5768 87.5543L43.5907 81.34H56.4093L58.4232 87.5543L56.3042 94.0928L50 96.2543L43.6958 94.0928L41.5768 87.5543Z" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                    </svg>
                    <div class="seperator"></div>
                    <span>Notifications</span>
                </div>
            </router-link>


            <div id="watchHistoryBtnLogo" class="sideMenuBtn">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 56L30 69L40.5 81M71 56L60.5 69L71 81M56 56L45.5 69L56 81" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                <path d="M67.4388 9H33.5612L9 33.5612V67.4388L33.5612 92H67.4388L92 67.4388V33.5612L67.4388 9Z" stroke="var(--color-text)" stroke-width="6" stroke-linejoin="bevel"/>
                <line x1="49.7453" y1="50.178" x2="68.7453" y2="21.178" stroke="var(--color-text)" stroke-width="6"/>
                <line x1="50.8789" y1="49.9965" x2="34.8789" y2="31.9965" stroke="var(--color-text)" stroke-width="6"/>
                </svg>
                <div class="seperator"></div>
                <span>History</span>
            </div>

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
    #navBtns{
        width: 100%;
    }
    .sideMenuBtn{
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .seperator{
        width: 1px;
        height: 20px;
        background-color: var(--color-text);
        display: none;
    }
    nav:hover{
        width: 220px;
        align-items: flex-start;
    }
    nav:hover .sideMenuBtn span{
        display: flex;
    }
    nav:hover .seperator{
        display: block;
    }
    .sideMenuBtn span{
        display: none;
        height: 50%;
        align-items: center;
        font-size: 20px;
        margin-left: 15px;
        color: var(--color-text);       
    }
    #homeBtnLogo{
        margin-top: 30px;       
    }
    .sideMenuBtn svg{
        margin: 20px;
    }
    .sideMenuBtn:hover svg{
        margin: 15px;
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
        cursor: default;
    }
</style>