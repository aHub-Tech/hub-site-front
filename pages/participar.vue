<template>

    <main class="participate_container">
        <div class="participate_head">
            <h4>QUERO<span> PARTICIPAR</span></h4>
        </div>
        <div class="participate_body">

            <div class="left_column">
                <div class="column_about">
                    <h2>Sobre a <span>HubTech</span></h2>
                    <p>
                        Um dos principais pilares da nossa comunidade é a Colaboração! Para isso, nós estamos criando DESAFIOS mensais onde voce pode participar e demonstrar na sua tecnologia preferida como usar. Os membros da comunidade se colocam à disposição para se ajudar, conforme seu nível de conhecimento em certas áreas.
                    </p>
                </div>
                <div class="column_challenge">
                    <h2>Como estamos organizados?!</h2>
                    <p>
                        Um dos principais piláres da nossa comunidade é a Ajuda! Para isso, nós “qualificamos” alguns membros da comunidade que se colocam à disposição de ajudar outros membros, conforme seu nível de conhecimento em certas áreas.
                    </p>
                </div>
            </div>

            <div class="right_column">
                <h2>Nossas Conexões</h2>
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
                        <p>Alguns de nossos projetos encontram-se no github, acesse e visualize alguns!</p>
                        <a href="https://github.com/aHub-Tech" target="_blank">Acessar</a>
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
                title: "participate",
            };
        }
    };

</script>

<style src="~/assets/css/pages/Participate.css" scoped></style>