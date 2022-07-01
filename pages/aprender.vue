<template>
  <main class="learn_container">
    <div class="learn_head">
      <h4>
        QUERO<span> APRENDER {{ test }}</span>
      </h4>
    </div>
    <div class="learn_body">
      <assunto-card
        v-for="(block, index) in blocks"
        :key="index"
        :titleColor="block.titleColor"
        :baseColor="block.baseColor"
        :source="block.source"
        :subjects="block.subjects"
        :info="block.info"
      >
        {{ block.title[0] }} <br />
        {{ block.title[1] }}
      </assunto-card>
    </div>
  </main>
</template>

<script>
import assuntoCard from "~/components/aprender/assunto-card.vue";
export default {
  components: { assuntoCard },
  layout: "site/default",
  data() {
    return {
      test: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("aprender/getBlocks");
    });
  },
  head() {
    return {
      title: "Aprender",
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
