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


<style src="./Home.css" lang="css" scoped />