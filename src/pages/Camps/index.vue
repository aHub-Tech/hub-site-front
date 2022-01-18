<template>
  <div class="camps_container">
    <header class="camps_header">
      <h2>HUB<span>CAMP<small>’</small>s</span></h2>
    </header>
    <section class="camps_content">
      <div class="content_item">
        <h3>Sobre a HubCamp</h3>
        <p>Um dos principais piláres da nossa comunidade é a Colaboração! Para isso, nós estamos criando <span class="yellow">DESAFIOS</span> mensais onde voce pode participar e demonstrar na sua tecnologia preferida como usar. Os membros da comunidade se colocam à disposição para se ajudar, conforme seu nível de conhecimento em certas áreas.</p>
        <button type="button" class="yellow">PARTICIPE!</button>
      </div>
      <div class="content_item">
        <h3>Desafio do Mes!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate sollicitudin lorem, congue luctus urna lacinia sit amet. Duis varius a lorem ut blandit. Donec ultrices est vitae lorem aliquet, ut luctus diam eleifend. Quisque dictum in ante et varius. Curabitur mauris ex, elementum at est quis, finibus molestie massa.</p>
        <p>Desafio disponivel para: <span class="yellow">FRONTEND</span> | <span class="green">BACKEND</span></p>
      </div>
    </section>
    <aside class="camps_aside">
      <div class="aside_item">
        <h3>Como Participar:</h3>
        <div class="aside_item__container">
          <div class="discord-item">
            <header>
              <img src="/discord.svg" alt="discord" />
              <h4>Discord</h4>
            </header>
            <div>
              <p>Nosso principal meio de comunicação dentro da comunidade. Venha conhecer!!</p>
              <button type="button">Acessar</button>
            </div>
          </div>
          <div class="github-item">
            <header>
              <img src="/github.svg" alt="Github" />
              <h4>Github</h4>
            </header>
            <div>
              <p>Os antigos desafios voce pode encontrar no nosso GitHub!</p>
              <button type="button">Acessar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="aside_item">
        <h3>Como Validar:</h3>
        <div class="aside_item__container">
          <div>
            <header>
              <img src="/drive.svg" alt="Google Drive" />
              <h4>Formulario de Entrega</h4>
            </header>
            <div>
              <p>Para validar sua entrega, basta entrar no formulario abaixo e verificar os passos para aplicação.</p>
              <button type="button">Acessar</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  layout: "site/default",
  head() {
    return {
      title: 'Camps'
    }
  }
}

/*

<div class="camps_container">
    <h2>HUB<span>CAMP<small>’</small>s</span></h2>
    <section class="camps_content">
      <div class="camps_content__item">
        <h3>Sobre a HubTech</h3>
        <div>
          <p>Um dos principais piláres da nossa comunidade é a Colaboração! Para isso, nós estamos criando <span class="yellow">DESAFIOS</span> mensais onde voce pode participar e demonstrar na sua tecnologia preferida como usar. Os membros da comunidade se colocam à disposição para se ajudar, conforme seu nível de conhecimento em certas áreas.</p>
        </div>
        <div>
          <button type="button" class="yellow">PARTICIPE!</button>
        </div>
      </div>
      <div class="camps_content__item">
        <h3>Desafio do Mes!</h3>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate sollicitudin lorem, congue luctus urna lacinia sit amet. Duis varius a lorem ut blandit. Donec ultrices est vitae lorem aliquet, ut luctus diam eleifend. Quisque dictum in ante et varius. Curabitur mauris ex, elementum at est quis, finibus molestie massa.</p>
          <p>Desafio disponivel para: <span class="yellow">FRONTEND</span> | <span class="backend">BACKEND</span></p>
        </div>
      </div>
    </section>
    <aside class="camps_aside">
      <section>
        <h3>Como Participar:</h3>
        <div>
          <div>
            <h4>Discord</h4>
            <p>Nosso principal meio de comunicação dentro da comunidade. Venha conhecer!!</p>
            <button type="button">ACESSAR</button>
          </div>
          <div>
            <h4>Github</h4>
            <p>Os antigos desafios voce pode encontrar no nosso GitHub!</p>
            <button type="button">ACESSAR</button>
          </div>
        </div>
      </section>
      <section>
        <h3>Como Validar:</h3>
        <div>
          <div>
            <h4>Formulario de Entrega</h4>
            <p>Para validar sua entrega, basta entrar no formulario abaixo e verificar os passos para aplicação.</p>
            <button type="button">ACESSAR</button>
          </div>
        </div>
      </section>
    </aside>
  </div>

*/
</script>

<style src="~/src/pages/Camps/styles.css" scoped></style>
