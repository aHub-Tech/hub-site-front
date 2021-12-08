<template>
  <div class="item" :class="classItem">
    <div class="card">
      <div class="header">
        <div class="bg"></div>
        <div class="infos">
          <div class="flex">
            <div class="img">
              <img :src="tutore.photo" :alt="tutore.name" class="imagem" />
            </div>
            <div class="person">
              <h4>{{ tutore.name }}</h4>
              <p>{{ tutore.name }}</p>
              <p>
                <span>{{ tutore.discord }}</span>
              </p>
            </div>
          </div>
          <p>
            {{ tutore.description }}
          </p>
        </div>
      </div>
      <div class="content">
        <div class="knowledge">
          <ul>
            <li
              v-for="(knowledge, index) in knowledges"
              :key="`${index}-contact`"
              :class="knowledge.class"
            >
              {{ knowledge.label }}
            </li>
          </ul>
        </div>
        <div class="contact">
          <h4>Contato</h4>
          <div class="buttons">
            <template v-for="(contact, index) in contacts">
              <a
                v-if="contact.isLink"
                :class="contact.class"
                :key="`${index}-contact-link`"
                :title="contact.label"
              >
                <i :class="contact.icon"></i>
              </a>
              <button
                v-else
                :class="contact.class"
                :key="`${index}-contact-button`"
                :title="contact.label"
                @click="openContact(contact)"
              >
                <i :class="contact.icon"></i>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tutore: {
      type: Object,
      default: () => ({
        title: null,
        name: null,
        discord: null,
        photo: null,
        IsVerified: false,
        hasDiploma: false,
        isMVP: false,
        resume: {},
        description: null,
        knowledges: [],
        contact: [],
      }),
    },
  },
  computed: {
    classItem() {
      const className = String(this.tutore.title).toLocaleLowerCase();
      return [className, `item-${className}`];
    },
    knowledges() {
      if (!this.tutore.knowledges) {
        return [];
      }
      return this.tutore.knowledges.map((knowledge) => {
        const className = String(knowledge).toLocaleLowerCase();
        return { label: knowledge, class: `knowledge-${className}` };
      });
    },
    contacts() {
      if (!this.tutore.contact) {
        return [];
      }
      return this.tutore.contact.map((contact) => {
        const className = String(contact.name).toLocaleLowerCase();
        return {
          ...contact,
          isLink: false,
          label: String(contact.name).toLocaleUpperCase(),
          class: `${className} contact-${className}`,
          icon: `mdi mdi-${className}`,
        };
      });
    },
  },
  methods: {
    openContact(contact) {
      //!todo ver regras
    },
  },
};
</script>

<style src="~/assets/css/components/cardInstructor.css" scoped></style>
