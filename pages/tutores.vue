<template>
  <main class="cover">
    <div class="cover_container">
      <div class="head">
        <h4>HUB <span>TUTORES</span></h4>
        <p>
          Um dos principais piláres da nossa comunidade é a Ajuda! Para isso,
          nós “qualificamos” alguns membros da comunidade que se colocam à
          disposição de ajudar outros membros, conforme seu nível de
          conhecimento em certas áreas.
        </p>
        <input
          type="text"
          name="search"
          class="search"
          placeholder="Pesquisar"
        />
      </div>
      <div class="content">
        <div class="grid">
          <card-instructor
            v-for="(tutore, index) in tutores"
            :key="`${index}-${tutore.name}_tutore`"
            :tutore="tutore"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import cardInstructor from "~/components/cardInstructor.vue";
export default {
  components: { cardInstructor },
  layout: "site/default",
  async asyncData({ $content, params }) {
    const tutores = await $content("tutores").sortBy("ranking").fetch();

    return {
      tutores,
    };
  },
  head() {
    return {
      title: "Tutores",
    };
  },
  data() {
    return {
      articles: [],
      stacks: [
        {
          name: "backend",
        },
        {
          name: "frontend",
        },
        {
          name: "fullstack",
        },
        {
          name: "iot",
        },
        {
          name: "design",
        },
        {
          name: "datascience",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style src="~/assets/css/pages/Tutors.css" scoped></style>
