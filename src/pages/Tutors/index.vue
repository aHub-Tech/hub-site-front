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
        <!-- <input
          type="text"
          name="search"
          class="search"
          placeholder="Pesquisar"
        /> -->
      </div>
      <div class="content">
        <div class="grid">
          <InstructorCard
            v-for="(tutor, index) in tutores"
            :key="`${index}-${tutor.name}_tutor`"
            :tutor="tutor"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "site/default",
  async asyncData({ $content, params }) {
    const tutores = await $content("tutores").sortBy('ranking').fetch();

    return {
      tutores,
    };
  },
  head() {
    return {
      title: "Tutores"
    };
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style src="~/src/pages/Tutors/styles.css" scoped></style>
