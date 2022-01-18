<template>
  <header class="header">
    <div class="header_container">
      <img src="/logo.png" alt="HUB" />

      <nav class="navigation">
        <ul>
          <li v-for="(item, index) in menus">
            <nuxt-link
              :key="`header_link-${item.to}-nuxt`"
              v-if="item.type === 'page'"
              class="header_link"
              :to="item.to">
              {{ item.label }}
            </nuxt-link>
            <a
              :key="`header_link-${item.to}-a`"
              v-else
              class="header_link"
              :href="item.to"
              :target="item.target || '_blank'">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <i
        @click="isMenuOpen = !isMenuOpen"
        class="mdi mdi-menu open_mobile_menu"
      ></i>
    </div>
  </header>
</template>

<script scoped>
export default {
  data() {
    return {
      isDropdown: false
    }
  },
  computed: {
    menus() {
      // type [page] - usa nuxt-link
      // type [open_link] - usa tag A href
      return [
        { type: "page", to: "/", label: "INICIO" },
        { type: "page", to: "/tutors", label: "TUTORES" },
        { type: "page", to: "/camps", label: "TREINAMENTO" },
        {
          type: "open_link",
          to: "/discord",
          label: "QUERO PARTICIPAR",
          target: "_blank",
        },
        {
          type: "open_link",
          to: "https://blog.ahub.tech/",
          label: "BLOG",
          target: "_blank",
        },
      ];
    }
  }
}
</script>

<style scoped>
@import '~/src/components/Header/styles.css';
</style>
