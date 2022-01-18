<template>
  <main class="cover">
    <div class="cover_container">
      <div class="cover_text">
        <h2>A HUB É <span>POP</span></h2>
        <h2>A HUB É <span>TECH</span></h2>
        <div class="title_bar"></div>
        <p>
          Aqui você encontrará os mais diversos assuntos pertinentes ao mundo de
          TI, conhecerá diversas pessoas e se divertirá muito enquanto aprende e
          ensina!
        </p>
        <a :href="discordLink" target="_blank" class="discord_btn">
          <i class="mdi mdi-discord"></i>
          QUERO FAZER PARTE
        </a>
      </div>
      <img src="cover.svg" alt="" />
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Inicio",
    };
  },
  data() {
    return {
      discordLink: "/discord",
    };
  },
};
</script>

<style src="~/src/pages/Home/styles.css" scoped></style>
