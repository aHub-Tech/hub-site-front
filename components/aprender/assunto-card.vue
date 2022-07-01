<template>
  <div class="learn_card" :style="setBackground">
    <div class="card_header">
      <h2 :style="{ color: titleColor }">
        HUB<span :style="setSpanTitleColor">Tech</span>
      </h2>
      <span class="right_span" :style="setSpan">...</span>
    </div>
    <div class="card_body">
      <span :style="setSpan">QUANDO QUISER!!</span>
      <h2 :style="setTitleColor">
        <slot> AQUI VAI O TITULO </slot>
      </h2>
    </div>
    <div class="card_footer">
      <span :style="setSpan">
        {{
          subjects && subjects !== 0
            ? `${subjects} Assuntos disponíveis!!`
            : "Nenhum Artigo disponível!!"
        }}
      </span>
    </div>
    <!-- image -->
    <img :src="source" alt="" />
    <div class="card_infos" :style="setInfoBackground">
      <p :style="{ color: '#000000' }">
        "{{ info.quote }}" - <strong> {{ info.author }} </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleColor: {
      type: String,
      required: false,
      default: "#000000",
    },
    baseColor: {
      type: String,
      required: false,
      default: "white",
    },
    source: {
      type: String,
      required: false,
    },
    subjects: {
      type: Number,
      required: false,
    },
    info: {
      type: Object,
      required: false,
      default: {quote: "", author: ""},
    },
  },
  methods: {
    setColor(baseColor, type) {
      let color = "";

      switch (type) {
        case "background":
          switch (baseColor) {
            case "white":
              color = "#ffffff";
              break;
            case "red":
              color = "#ff3a3e";
              break;
            case "blue":
              color = "#303197";
              break;
            case "light_blue":
              color = "#2b79ff";
              break;
            case "grey":
              color = "#1c1c1e";
          }
          return color;

        case "span":
          switch (baseColor) {
            case "white":
              color = "#909090";
              break;
            case "red":
              color = "#ffc6c7";
              break;
            case "blue":
              color = "#cdc6ff";
              break;
            case "light_blue":
              color = "#DBD6FF";
              break;
            case "grey":
              color = "#949494";
          }
          return color;

        case "infoBackground":
          switch (baseColor) {
            case "white":
              color = "#FFFFFF";
              break;
            case "red":
              color = "#ffc6c7";
              break;
            case "blue":
              color = "#cdc6ff";
              break;
            case "light_blue":
              color = "#DBD6FF";
              break;
            case "grey":
              color = "#949494";
          }
          return color;

        case "title":
          switch (baseColor) {
            case "white":
              color = "#2a2a2a";
              break;
            case "grey":
              color = "#ffc100";
              break;
            default:
              color = "#FFFFFF";
          }
          return color;

        case "spanTitle":
          switch (baseColor) {
            case "white":
              color = "#2a2a2a";
              break;
            default:
              color = "#FFFFFF";
          }
          return color;
      }
    },
  },
  computed: {
    setBackground() {
      const color = this.setColor(this.baseColor, "background");

      return { backgroundColor: color };
    },

    setSpan() {
      const color = this.setColor(this.baseColor, "span");
      return {
        fontWeight: "700",
        color,
        fontSize: "14px",
      };
    },

    setTitleColor() {
      const color = this.setColor(this.baseColor, "title");
      return {
        color,
      };
    },

    setSpanTitleColor() {
      const color = this.setColor(this.baseColor, "spanTitle");
      return {
        color,
      };
    },

    setInfoBackground() {
      const color = this.setColor(this.baseColor, "infoBackground");
      return {
        backgroundColor: color,
        color: "#3A3A3A",
      };
    },
  },
};
</script>

<style scoped>
.learn_card {
  width: 433px;
  height: 433px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  transition: 0.6s ease-in-out;
  cursor: none;
}

.learn_card:hover {
  transform: translateY(-10px);
}

.learn_card:hover .card_infos {
  top: 0;
  opacity: 1;
}

.learn_card .card_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.learn_card .card_header h2 {
  /* color: #aa3436; */
  font-weight: 900;
  font-size: 20px;
}

.learn_card .card_header h2 span {
  color: white;
  font-weight: 700;
}

.learn_card .card_header .right_span {
  font-weight: 600;
  font-size: 12px;
}

.card_infos {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
  left: 0;
  transition: 0.7s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  justify-content: center;
  opacity: 0;
}

.card_infos p {
  font-style: italic;
  font-weight: 300;
  font-size: 30px;
  color: white;
}

/* card_body */

.learn_card .card_body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.learn_card .card_body span {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
}

.learn_card .card_body h2 {
  font-size: 50px;
  font-weight: 900;
  color: white;
  line-height: 48px;
}

/* card_footer */

.learn_card .card_footer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.learn_card .card_footer span {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
}

/* float img */

.learn_card img {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 225px;
}

.learn_card .alter_height_image {
  position: absolute;
  bottom: -30px;
  right: -100px;
  width: 300px;
}
</style>