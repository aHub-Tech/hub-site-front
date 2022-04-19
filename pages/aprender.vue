<template>
  <main class="learn_container">
    <div class="learn_head">
      <h4>QUERO<span> APRENDER </span></h4>
    </div>
    <div class="learn_body">
      <assunto-card
        v-for="(block, index) in blocks"
        :key="index"
        :titleColor="block.titleColor"
        :baseColor="block.baseColor"
        :source="block.source"
      >
        <template v-slot:main>
          {{ block.title[0] }} <br />
          {{ block.title[1] }}
        </template>
        <template v-slot:define>
          "{{ block.info.quote }}" - <strong> {{ block.info.author }} </strong>
        </template>
        <template v-slot:footer>{{
          block.subjects && block.subjects !== 0
            ? `${block.subjects} Assuntos disponíveis!!`
            : "Nenhum Assunto disponível!!"
        }}</template>
      </assunto-card>
    </div>
  </main>
</template>

<script>
import assuntoCard from "~/components/aprender/assunto-card.vue";
export default {
  components: { assuntoCard },
  layout: "site/default",
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("aprender/getBlocks");
    });
  },
  head() {
    return {
      title: "learn",
    };
  },
  computed: {
    blocks() {
      return this.$store.state.aprender.blocks;
    },
  },
};
</script>

<style src="~/assets/css/pages/Learn.css" scoped></style>

<style scoped>
</style>