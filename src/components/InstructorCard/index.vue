<template>
  <div class="item" :class="classItem">
    <div class="card">
      <div class="header">
        <div class="bg" :style="styleBg"></div>
        <div class="actions">
          <ul>
            <li v-if="tutor.isMVP">
              <button type="button" title="é MVP">
                <icon-mvp />
              </button>
            </li>
            <li v-if="tutor.hasDiploma">
              <button type="button" title="é Formado">
                <icon-diploma />
              </button>
            </li>
          </ul>
        </div>
        <div class="infos">
          <div class="flex">
            <div class="img">
              <img :src="tutor.photo" :alt="tutor.name" class="imagem" />
            </div>
            <div class="person">
              <h4>{{ tutor.title }}</h4>
              <p class="full-name">{{ tutor.name }} <icon-verified :isVerified="tutor.isVerified" width="16" height="16" /></p>
              <p>
                <span>{{ tutor.discord }}</span>
              </p>
            </div>
            <div class="resume">
              <button type="button" @click="resume(tutor.resume)">
                <icon-resume />
              </button>
            </div>
          </div>
          <p>
            {{ tutor.description }}
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
              :title="knowledge.label"
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
                :href="contact.value"
                v-if="contact.isLink"
                :class="contact.class"
                :key="`${index}-contact-link`"
                :title="contact.label"
                rel="noopener"
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
import IconDiploma from '~/src/components/InstructorCard/diploma.vue';
import IconMvp from '~/src/components/InstructorCard/mvp.vue';
import IconResume from '~/src/components/InstructorCard/resume.vue';
import IconVerified from '~/src/components/InstructorCard/verified.vue';

export default {
  props: {
    tutor: {
      type: Object,
      default: () => ({
        title: null,
        name: null,
        discord: null,
        photo: null,
        isVerified: false,
        hasDiploma: false,
        isMVP: false,
        resume: {},
        description: null,
        knowledges: [],
        contact: [],
      }),
    },
  },
  components: {
    IconDiploma,
    IconMvp,
    IconResume,
    IconVerified
  },
  data() {
    return {
      stacks: [
        {
          name: "backend",
          class: "backend",
          color: "#3bf79d",
          fontColor: "#000000",
        },
        {
          name: "frontend",
          class: "frontend",
          color: "#1200e2",
          fontColor: "#000000",
        },
        {
          name: "fullstack",
          class: "fullstack",
          color: "#ffd235",
          fontColor: "#000000",
        },
        {
          name: "iot",
          class: "iot",
          color: "#ff3535",
          fontColor: "#000000",
        },
        {
          name: "design",
          class: "design",
          color: "#ff35d3",
          fontColor: "#000000",
        },
        {
          name: "datascience",
          class: "datascience",
          color: "#ff7e35",
          fontColor: "#000000",
        },
      ],
    };
  },
  computed: {
    stackParam() {
      const title = String(this.tutor.title).toLocaleLowerCase();

      const stack = this.stacks.find((stack) => stack.name === title);
      if (stack) {
        return stack;
      }
      // default
      return {
        name: "",
        class: "no-stack",
        color: "#c7c7c7",
        fontColor: "#000000",
      };
    },
    classItem() {
      const stack = this.stackParam;
      let className = stack.class;
      return [`item-${className}`];
    },
    styleBg() {
      return {
        backgroundColor: this.stackParam.color,
        color: this.stackParam.fontColor,
      };
    },

    knowledges() {
      if (!this.tutor.knowledges) {
        return [];
      }
      return this.tutor.knowledges.map((knowledge) => {
        const className = String(knowledge).replace('#', 'sharp')
          .replace('.', '-').replace(/\s/, '-').toLocaleLowerCase();
        return { label: knowledge, class: `knowledge-${className === 'eletrônica' ? 'electronic' : className}` };
      });
    },
    contacts() {
      if (!this.tutor.contact) {
        return [];
      }
      return this.tutor.contact.map((contact) => {
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
      if (contact.name === 'discord') {
        window.open(`discord:${contact.value}`)
      } else {
        window.open(contact.value);
      }
    },
    resume(url) {
      if (!url.link) {
        return;
      }
      window.open(url.link, '_blank')
    }
  },
};
</script>

<style src="~/src/components/InstructorCard/styles.css" scoped></style>
