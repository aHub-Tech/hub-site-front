<template>
  <div class="item" :class="classItem">
    <div class="card">
      <div class="header">
        <div class="bg" :style="styleBg"></div>
        <div class="actions">
          <ul>
            <li v-if="tutor.isMVP">
              <button type="button" v-on:click="mvp" title="é MVP">
                <img src="/mvp.png" alt="#" />
              </button>
            </li>
            <li v-if="tutor.hasFormed">
              <button type="button" v-on:click="formed" title="é Formado">
                <img src="/formed.png" alt="#" />
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
              <p class="full-name">{{ tutor.name }} <img v-if="tutor.IsVerified" src="/verified.png" alt="Verified" title="Verificado" /></p>
              <p>
                <span>{{ tutor.discord }}</span>
              </p>
            </div>
            <div class="resume">
              <button type="button" v-on:click="resume">
                <img src="/resume.png" alt="#" />
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
export default {
  props: {
    tutor: {
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
        const className = String(knowledge).replace('#', 'sharp').replace('.', '-').toLocaleLowerCase();
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
      window.open(contact.value);
    },
    mvp() {
      alert('Under construction')
    },
    formed() {
      alert('Under construction')
    },
    resume() {
      alert('Under construction')
    }
  },
};
</script>

<style scoped>
.backend {
  --color: #3bf79d;
}

.frontend {
  --color: #1200e2;
}

.design {
  --color: #ff35d3;
}

.fullstack {
  --color: #ffd235;
}

.iot {
  --color: #ff3535;
}

.datascience {
  --color: #ff7e35;
}

.item .card {
  border: 2px solid #222;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s all ease;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.item .card:hover {
  border: 2px solid #2f2f2f;
}

.item .card .header {
  position: relative;
}

.item .card .header .bg {
  height: 90px;
  background-color: var(--color);
}

.item .card .header .actions {
  position: absolute;
  top: 4.5px;
  right: 4.5px;
}

.item .card .header .actions ul {
  display: flex;
  flex-wrap: wrap;
  gap: 4.5px;
  list-style: none;
}

.item .card .header .actions ul li {
  background-color: rgba(0, 0, 0, .4);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: relative;
}

.item .card .header .actions ul li button {
  cursor: pointer;
}

.item .card .header .actions ul li button img {
  width: 48px;
  height: 48px;

  position: absolute;
  top: -25%;
  left: -25%;
  transform: translate(5%, 5%);
}

.item .card .header .infos {
  padding: 10px;
  margin-top: -65px;
}

.item .card .header .infos .flex {
  display: flex;
  align-items: center;
}

.item .card .header .infos .flex .person {
  margin-left: 10px;
  margin-top: -10px;
}

.item .card .header .infos .flex .person h4 {
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  margin-top: 32px;
  text-transform: initial;
}

.item .card .header .infos .flex .person h4::first-letter {
  text-transform: uppercase;
}

.item .card .header .infos .flex .person .full-name {
  display: flex;
  align-items: center;
}

.item .card .header .infos .flex .person .full-name img {
  margin-left: -2px
}

.item .card .header .infos .flex .person p {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  padding: 0;
}

.item .card .header .infos .flex .person p:nth-child(3) {
  color: #888888;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
}

.item .card .header .infos .flex .img {
  position: relative;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 50%;
  width: 83px;
  height: 83px;
}

.item .card .header .infos .flex .img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid var(--color);
  object-fit: cover;
}

.item .card .header .infos p {
  color: #888;
  font-size: 14px;
  margin-top: 15px;
  padding: 0 5px;
}

.item .card .header .resume {
  position: absolute;
  top: 88px;
  right: -4.5px;
}

.item .card .header .resume button {
  cursor: pointer;
}

.item .card .content {
  padding: 0 15px 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item .card .content .knowledge {
  padding-bottom: 18px;
}

.item .card .content .knowledge ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.item .card .content .knowledge ul li {
  flex: 0 0 calc(33.3% - 12px);
  list-style: none;
  padding: 6px 12px;
  background-color: #222;
  border-radius: 3px;
  color: #fff;
  font-size: .775em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.item .card .content .knowledge ul li.knowledge-node-js {
  background-color: rgba(102, 181, 68, .4);
  border: 1px solid rgba(102, 181, 68, 1);
}

.item .card .content .knowledge ul li.knowledge-typescript {
  background-color: rgba(47, 114, 188, .4);
  border: 1px solid rgba(47, 114, 188, 1);
}

.item .card .content .knowledge ul li.knowledge-vue-js {
  background-color: rgba(62, 174, 124, .4);
  border: 1px solid rgba(62, 174, 124, 1);
}

.item .card .content .knowledge ul li.knowledge-nestjs {
  background-color: rgba(214, 33, 74, .4);
  border: 1px solid rgba(214, 33, 74, 1);
}

.item .card .content .knowledge ul li.knowledge-html5 {
  background-color: rgba(231, 100, 41, .4);
  border: 1px solid rgba(231, 100, 41, 1);
}

.item .card .content .knowledge ul li.knowledge-sql {
  background-color: rgba(242, 169, 0, .4);
  border: 1px solid rgba(242, 169, 0, 1);
}

.item .card .content .knowledge ul li.knowledge-python {
  background-color: rgba(50, 97, 136, .4);
  border: 1px solid rgba(50, 97, 136, 1);
}

.item .card .content .knowledge ul li.knowledge-laravel {
  background-color: rgba(242, 43, 29, .4);
  border: 1px solid rgba(242, 43, 29, 1);
}

.item .card .content .knowledge ul li.knowledge-nuxt-js {
  background-color: rgba(16, 128, 111, .4);
  border: 1px solid rgba(16, 128, 111, 1);
}

.item .card .content .knowledge ul li.knowledge-mongodb {
  background-color: rgba(15, 162, 76, .4);
  border: 1px solid rgba(15, 162, 76, 1);
}

.item .card .content .knowledge ul li.knowledge-csharp {
  background-color: rgba(141, 58, 163, .4);
  border: 1px solid rgba(141, 58, 163, 1);
}

.item .card .content .knowledge ul li.knowledge-vb-net {
  background: rgba(98, 41, 116, .4);
  border: 1px solid rgba(98, 41, 116, 1);
}

.item .card .content .knowledge ul li.knowledge-electronic {
  background: rgba(230, 173, 87, .4);
  border: 1px solid rgba(230, 173, 87, 1);
}

.item .card .content .contact {
  margin-top: 20px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.item .card .content .contact h4 {
  font-size: 15px;
  color: #fff;
  font-weight: 500;
}

.item .card .content .contact .buttons {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.item .card .content .contact .buttons button {
  color: #fff;
  cursor: pointer;
  font-size: 26px;
}

.instagram {
  background: linear-gradient(to bottom, #f7752f 0%,#bf2a9f 100%);
  background-clip: text;
  -webkit-text-fill-color:transparent;
}

.twitch {
  color: #a970ff !important;
}

.facebook {
  color: #0080ff !important;
}

.linkedin {
  color: #0a66c2 !important;
}

</style>
