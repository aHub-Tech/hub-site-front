<template>
  <footer class="footer">
    <div class="footer-copyright">
      <ul class="copyright-links">
        <li>
          <a href="https://github.com/aHub-Tech" target="_blank" rel="noopener norefeer">
            <i class="mdi mdi-github"></i>
          </a>
        </li>
        <li>
          <a :href="discordLink" target="_blank">
            <i class="mdi mdi-discord"></i>
          </a>
        </li>
      </ul>
      <p class="copyright-text">Copyright © {{ date }} Todos direitos reservados.</p>
    </div>
  </footer>
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
      date: new Date().getUTCFullYear()
    };
  }
}
</script>

<style src="~/src/components/Footer/styles.css" scoped></style>
