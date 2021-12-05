<template>

    <div>

        <header>
            <div class="header_container">
                <img src="logo.png" alt="">
                <nuxt-link class="header_link" to="/">INICIO</nuxt-link>
                <a class="header_link" href="https://discord.com/invite/RMDSHVkDmE" target="_blank">QUERO PARTICIPAR</a>
                <a class="header_link" href="https://blog.ahub.tech/" target="_blank">BLOG</a>
                <i @click="isMenuOpen = !isMenuOpen" class="mdi mdi-menu open_mobile_menu"></i>
            </div>
        </header>

        <div class="mobile_menu" v-if="isMenuOpen">
            <div class="header_mobile_menu">
                <i @click="isMenuOpen = !isMenuOpen" class="mdi mdi-close close_menu"></i>
            </div>
            <nuxt-link class="header_link" to="/">INICIO</nuxt-link>
            <a class="header_link" href="https://discord.com/invite/RMDSHVkDmE" target="_blank">QUERO PARTICIPAR</a>
            <a class="header_link" href="https://blog.ahub.tech/" target="_blank">BLOG</a>
        </div>

        <Nuxt />
    </div>

</template>

<script>
    export default {
        name: 'default',
        data() {
            return {
                isMenuOpen: false
            }
        }
    }
</script>


<style scoped>

    header {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: solid 1px #3E3D3D;
    }

    header .header_container {
        width: 1300px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        column-gap: 30px;
    }

    header .header_container img {
        width: 80px;
    }

    header .header_container .header_link {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
        color: white;
        transition: .5s;
    }

    header .header_container .header_link:hover {
        color: #F73B91;
    }

    header .header_container .open_mobile_menu {
        display: none;
    }

    .mobile_menu {
        width: 75%;
        background: #19191C;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 102;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        animation: fromRight .5s ease-in-out;
    }

    .mobile_menu .header_mobile_menu {
        display: flex;
        margin-bottom: 20px;
    }

    .mobile_menu .header_mobile_menu i {
        display: flex;
        font-size: 25px;
        color: white;
    }

    .mobile_menu .header_link {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
        color: white;
        transition: .5s;
        margin-bottom: 10px;
    }

    /* keyframes */

    @keyframes fromRight {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* responsive */

    @media(max-width: 1320px) {

        header .header_container {
            width: 900px;
        }

    }

    @media(max-width: 920px) {

        header .header_container {
            width: 600px;
        }

        header .header_container img {
            width: 50px;
        }
        
    }

    @media(max-width: 620px) {

        header .header_container {
            width: 100%;
            padding: 20px;
            justify-content: space-between;
        }

        header .header_container .header_link {
            display: none;
        }

        header .header_container .open_mobile_menu {
            display: flex;
            font-size: 25px;
            color: white;
        }

    }

</style>

