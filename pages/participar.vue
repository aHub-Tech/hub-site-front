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
            A HUB nasceu em maio de 2021 por alguns apaixonados em tecnologia,
            que gostariam de reunir pessoas com vários níveis de conhecimentos
            em canais únicos, dando mais praticidade e engajamento com a
            comunidade.
          </p>
        </div>
        <div class="column_challenge">
          <h2>Como estamos organizados?!</h2>
          <p>
            A Hub hoje se organiza em dois locais. Temos um Discord nos quais
            nos organizamos e produzimos eventos, tiramos duvidas e aproveitamos
            para fazer network. E nossos projetos que hoje estao no github.
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
            <p>
              Nosso principal meio de comunicação dentro da comunidade. Venha
              conhecer!!
            </p>
            <a href="/discord" target="_blank">Acessar</a>
          </div>
        </div>
        <div class="item_method">
          <div class="item_head">
            <i class="mdi mdi-github"></i>
            <span>Github</span>
          </div>
          <div class="item_body">
            <p>
              Alguns de nossos projetos encontram-se no github, acesse e
              visualize alguns!
            </p>
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
  },
};
</script>

<style src="~/assets/css/pages/Participate.css" scoped></style>