<template>

    <main class="hubcamps_container">
        <div class="hubcamps_head">
            <h4>HUB<span>CAMP's</span></h4>
        </div>
        <div class="hubcamps_body">

            <div class="left_column">
                <div class="column_about">
                    <h2>Sobre a <span>HubCamp</span></h2>
                    <p>
                        Um dos principais pilares da nossa comunidade é a Colaboração! Para isso, nós estamos criando DESAFIOS mensais onde voce pode participar e demonstrar na sua tecnologia preferida como usar. Os membros da comunidade se colocam à disposição para se ajudar, conforme seu nível de conhecimento em certas áreas.
                    </p>
                    <a href="#">PARTICIPE!</a>
                </div>
                <div class="column_challenge">
                    <h2>Desafio do Mês!</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque animi distinctio id earum placeat ipsam mollitia sint impedit nemo cumque at fugiat voluptatibus est nam perspiciatis, minus voluptatem voluptates ad!
                    </p>
                    <p>Desafio disponível para: <span class="frontend">FRONTEND</span> | <span class="backend">BACKEND</span></p>
                </div>
            </div>

            <div class="right_column">
                <h2>Como Participar</h2>
                <div class="item_method">
                    <div class="item_head">
                        <i class="mdi mdi-discord"></i>
                        <span>Discord</span>
                    </div>
                    <div class="item_body">
                        <p>Nosso principal meio de comunicação dentro da comunidade. Venha conhecer!!</p>
                        <a href="/discord" target="_blank">Acessar</a>
                    </div>
                </div>
                <div class="item_method">
                    <div class="item_head">
                        <i class="mdi mdi-github"></i>
                        <span>Github</span>
                    </div>
                    <div class="item_body">
                        <p>Os antigos desafios voce pode encontrar no nosso GitHub!</p>
                        <a href="https://github.com/aHub-Tech" target="_blank">Acessar</a>
                    </div>
                </div>
                <h2>Como Validar</h2>
                <div class="item_method">
                    <div class="item_head">
                        <i class="mdi mdi-google-drive"></i>
                        <span>Formulário de Entrega</span>
                    </div>
                    <div class="item_body">
                        <p>Para validar sua entrega, basta entrar no formulário abaixo e verificar os passos para aplicação.</p>
                        <a href="#">Acessar</a>
                    </div>
                </div>
            </div>

        </div>
    </main>

</template>

<script>
    export default {
        layout: "site/default",
        head() {
            return {
                title: "HubCamps",
            };
        }
    };

</script>

<style src="~/assets/css/pages/Hubcamps.css" scoped></style>