<template>
  <div class="item" :class="(stack.name)">
    <div class="card">
      <div class="header">
        <div class="bg"></div>
        <div class="infos">
          <div class="flex">
            <div class="img">
              <img src="https://media.discordapp.net/attachments/917799198156541952/917951978812887040/23ruiygbdg.jpeg" alt="Pessoa" class="imagem">
            </div>
            <div class="person">
              <h4>{{stack.name}}</h4>
              <p>Davi Mello</p>
              <p><span>davii#3306</span></p>
            </div>
          </div>
          <p>
            Desenvolvedor full-stack há mais de 5 anos, cursando Engenharia de Software
          </p>
        </div>
      </div>
      <div class="content">
        <div class="knowledge">
          <ul>
            <li>
              Node.JS
            </li>
            <li>
              Figma
            </li>
            <li>
              Css
            </li>
            <li>
              Java
            </li>
            <li>
              C#
            </li>
            <li>
              Sass
            </li>
            <li>
              Python
            </li>
          </ul>
        </div>
        <div class="contact">
          <h4>
            Contato
          </h4>
          <div class="buttons">
            <button class="instagram">
              <i class="mdi mdi-instagram"></i>
            </button>
            <button class="facebook">
              <i class="mdi mdi-facebook"></i>
            </button>
            <button class="twitch">
              <i class="mdi mdi-twitch"></i>
            </button>
            <button class="twitter">
              <i class="mdi mdi-twitter"></i>
            </button>
            <button class="linkedin">
              <i class="mdi mdi-linkedin"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "stack"
  ]
}
</script>


<style src="~/assets/css/components/cardInstructor.css" scoped></style>

