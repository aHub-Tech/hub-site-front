<template>
    
    <main class="cover">
        <div class="cover_container">
            <div class="cover_text">
                <h2>A HUB É <span>POP</span></h2>
                <h2>A HUB É <span>TECH</span></h2>
                <div class="title_bar"></div>
                <p>Aqui você encontrará os mais diversos assuntos pertinentes ao mundo de TI, conhecerá diversas pessoas e se divertirá muito enquanto aprende e ensina!</p>
                <a href="https://discord.com/invite/RMDSHVkDmE" target="_blank" class="discord_btn">
                    <i class="mdi mdi-discord"></i>
                    QUERO FAZER PARTE
                </a>
            </div>
            <img src="cover.svg" alt="">
        </div>
        <div class="cover_links">
            <a target="_blank" href="https://github.com/aHub-Tech" class="cover_link">
                <i class="mdi mdi-github"></i>
            </a>
            <a target="_blank" href="https://discord.com/invite/RMDSHVkDmE" class="cover_link">
                <i class="mdi mdi-discord"></i>
            </a>
        </div>
    </main>

</template>

<script>
    export default {
        layout: 'site/default',
        head() {
            return {
                title: 'Inicio'
            }
        }
    }
</script>


<style scoped>

    .cover {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 250px;
    }

    .cover .cover_container {
        overflow: hidden;
        width: 1300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cover .cover_container .cover_text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        animation: fromTop 1s ease-in-out;
        z-index: 99;
    }


    .cover .cover_container .cover_text h2 {
        font-size: 75px;
        font-weight: 300;
        color: #fff;
        letter-spacing: 10px;
    }

    .cover .cover_container .cover_text h2 span {
        background: #F73B91;
        font-weight: 900;
        padding-left: 10px;
    }

    .cover .cover_container .cover_text h2:first-child {
        font-weight: 900;
        margin-bottom: -10px;
    }

    .cover .cover_container .cover_text h2:first-child span {
        background: #3bf79f;
        font-weight: 300;
    }

    .cover .cover_container .cover_text p {
        font-weight: 300;
        font-size: 16px;
        margin-top: 10px;
        color: rgb(199, 199, 199);
        width: 650px;
        letter-spacing: 2px;
    }

    .cover .cover_container .cover_text .discord_btn {
        padding: 15px 20px;
        background: #5662F6;
        color: white;
        letter-spacing: 2px;
        font-size: 14px;
        border-radius: 8px;
        margin-top: 30px;
        transition: .3s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cover .cover_container .cover_text .discord_btn:hover {
        background: #293397;
        color: white;
    }

    .cover .cover_container .cover_text .discord_btn i {
        color: white;
        margin-right: 10px;
        font-size: 20px;
    }


    .cover .cover_container img {
        width: 500px;
        animation: fromTop 1.5s ease-in-out;
    }
    
    .cover .cover_links {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
    }

    .cover .cover_links .cover_link i {
        font-size: 30px;
        color: white;
        transition: .5s;
    }

    .cover .cover_links .cover_link i:hover {
        color: #3bf79f;
    }

    @keyframes fromTop{
        0% {
            transform: translateY(-100%);
            opacity: 0;
        } 50% {
            opacity: 0;
        } 100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fromBottom{
        0% {
            transform: translateY(100%);
            opacity: 0;
        } 50% {
            opacity: 0;
        } 100% {
            transform: translateY(0);
            opacity: 1;
        }
    }


    @media(max-height: 870px) {

        .cover {
            margin-top: 100px;
        }

    }

    @media(max-width: 1320px) {

        .cover {
            margin-top: 200px;
        }

        .cover .cover_container {
            width: 900px;
        }

        .cover .cover_container .cover_text h2 {
            font-size: 50px;
            letter-spacing: 7px;
        }

        .cover .cover_container .cover_text h2 span {
            padding-left: 6px;
        }

        .cover .cover_container .cover_text h2:first-child {
            margin-bottom: -5px;
        }

        .cover .cover_container .cover_text p {
            font-size: 14px;
            width: 460px;
        }

        .cover .cover_container .cover_text .discord_btn {
            padding: 10px 15px;
            font-size: 12px;
            border-radius: 5px;
        }

        .cover .cover_container img {
            width: 350px;
        }

    }

    @media(max-width: 920px) {

        .cover .cover_container {
            width: 600px;
        }

        .cover .cover_container .cover_text h2 {
            font-size: 30px;
            letter-spacing: 4px;
        }

        .cover .cover_container .cover_text h2 span {
            padding-left: 3px;
        }

        .cover .cover_container .cover_text p {
            font-size: 11px;
            width: 290px;
        }

        .cover .cover_container .cover_text .discord_btn {
            padding: 7px 13px;
            font-size: 11px;
            border-radius: 4px;
        }

        .cover .cover_container img {
            width: 300px;
        }

        .cover .cover_links .cover_link i {
            font-size: 25px;
        }

    }

    @media(max-width: 620px) {

        .cover {
            padding: 0px 20px;
            margin-top: 100px;
        }

        .cover_container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .cover .cover_container .cover_text {
            width: 100%;
            align-items: center;
        }

        .cover .cover_container .cover_text p {
            text-align: center;
        }

        .cover .cover_container .cover_text .discord_btn {
            padding: 7px 13px;
            font-size: 11px;
            border-radius: 4px;
        }

        .cover .cover_container img {
            width: 250px;
        }

        .cover .cover_links .cover_link i {
            font-size: 25px;
        }

    }

    @media(max-width: 620px) {

        .cover .cover_container img {
            width: 200px;
        }
        
    }


</style>