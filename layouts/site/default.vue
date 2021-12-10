<template>
  <div>
    <header>
      <div class="header_container">
        <img src="/logo.png" alt="HUB" />

        <template v-for="(item, index) in menus">
          <nuxt-link
            :key="`header_link-${item.to}-nuxt`"
            v-if="item.type === 'page'"
            class="header_link"
            :to="item.to"
            :title="item.label"
          >
            {{ item.label }}
          </nuxt-link>
          <a
            v-else
            :key="`header_link-${item.to}-a`"
            class="header_link"
            :href="item.to"
            :target="item.target || '_blank'"
            rel="noopener"
            :title="item.label"
          >
            {{ item.label }}
          </a>
        </template>

        <i
          @click="isMenuOpen = !isMenuOpen"
          class="mdi mdi-menu open_mobile_menu"
        ></i>
      </div>
    </header>

    <div class="mobile_menu" v-if="isMenuOpen">
      <div class="header_mobile_menu">
        <i
          @click="isMenuOpen = !isMenuOpen"
          class="mdi mdi-close close_menu"
        ></i>
      </div>
      <template v-for="(item, index) in menus">
        <nuxt-link
          :key="`header_link-${item.to}-nuxt-mobile`"
          v-if="item.type === 'page'"
          class="header_link"
          :to="item.to"
          :title="item.label"
        >
          {{ item.label }}
        </nuxt-link>
        <a
          v-else
          :key="`header_link-${item.to}-a-mobile`"
          class="header_link"
          :href="item.to"
          :target="item.target || '_blank'"
          rel="noopener"
          :title="item.label"
        >
          {{ item.label }}
        </a>
      </template>
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    menus() {
      // type [page] - usa nuxt-link
      // type [open_link] - usa tag A href
      return [
        { type: "page", to: "/", label: "INICIO" },
        { type: "page", to: "/tutors", label: "TUTORES" },
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
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: solid 1px #3e3d3d;
}

header .header_container {
  width: 1300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 30px;
}

header .header_container img {
  width: 80px;
}

header .header_container .header_link {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  transition: 0.5s;
}

header .header_container .header_link:hover {
  color: #f73b91;
}

header .header_container .open_mobile_menu {
  display: none;
}

.mobile_menu {
  width: 75%;
  background: #19191c;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 102;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: fromRight 0.5s ease-in-out;
}

.mobile_menu .header_mobile_menu {
  display: flex;
  margin-bottom: 20px;
}

.mobile_menu .header_mobile_menu i {
  display: flex;
  font-size: 25px;
  color: white;
}

.mobile_menu .header_link {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  transition: 0.5s;
  margin-bottom: 10px;
}

/* keyframes */

@keyframes fromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* responsive */

@media (max-width: 1320px) {
  header .header_container {
    width: 900px;
  }
}

@media (max-width: 920px) {
  header .header_container {
    width: 600px;
  }

  header .header_container img {
    width: 50px;
  }
}

@media (max-width: 620px) {
  header .header_container {
    width: 100%;
    padding: 20px;
    justify-content: space-between;
  }

  header .header_container .header_link {
    display: none;
  }

  header .header_container .open_mobile_menu {
    display: flex;
    font-size: 25px;
    color: white;
  }
}
</style>
