<template>
  <main class="learn_container">
    <div class="learn_head">
      <h4>QUERO<span> APRENDER</span></h4>
    </div>
    <div class="learn_body">
      <assunto-card
        titleColor="#39f290"
        baseColor="red"
        source="/learn_design.svg"
      >
        <template v-slot:main>
          DEV. <br />
          FRONT-END
        </template>
        <template v-slot:define>
          "O Front-end está muito relacionado com a interface gráfica do
          projeto. Ou seja, é onde se desenvolve a aplicação com a qual o
          usuário irá interagir diretamente, seja em softwares, sites,
          aplicativos, etc." - <strong> Totvs </strong>
        </template>
      </assunto-card>

      <assunto-card baseColor="blue" source="/learn_computing.svg">
        <template v-slot:main>
          DEV. <br />
          BACK-END
        </template>
        <template v-slot:define>
          “Back-end se relaciona com o que está por trás das aplicações
          desenvolvidas na programação” - <strong> Totvs </strong>
        </template>
      </assunto-card>

      <assunto-card baseColor="white" source="/learn_cloud.svg">
        <template v-slot:main> DEVOPS<br />CLOUD </template>
        <template v-slot:define>
          "DevOps é um modelo que combina filosofias culturais, práticas e
          ferramentas que aumentam a capacidade de uma empresa distribuir seus
          serviços em alta velocidade." - <strong> Treinaweb </strong>
        </template>
      </assunto-card>

      <assunto-card
        titleColor="#ffc100"
        baseColor="grey"
        source="/learn_web_design.svg"
      >
        <template v-slot:main>
          UI.UX <br />
          WEB DESIGN
        </template>
        <template v-slot:define>
          "Essa área define como melhorar a interação entre usuários e
          aplicativos ou softwares. O objetivo é melhorar a experiência e
          aumentar o lucro das empresas." - <strong> RockContent </strong>
        </template>
      </assunto-card>

      <assunto-card baseColor="light_blue" source="/learn_mobile.svg">
        <template v-slot:main>
          DEV. <br />
          MOBILE
        </template>
        <template v-slot:define>
          "A área responsavel por projetar e elaborar aplicativos de celular,
          para qualquer finalidade, inclusive a educação." -
          <strong> Orientu </strong>
        </template>
      </assunto-card>
    </div>
  </main>
</template>

<script>
import assuntoCard from "~/components/aprender/assunto-card.vue";
export default {
  components: { assuntoCard },
  layout: "site/default",
  head() {
    return {
      title: "learn",
    };
  },
};
</script>

<style src="~/assets/css/pages/Learn.css" scoped></style>

<style scoped>
</style>