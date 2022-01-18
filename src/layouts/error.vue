<template>
  <main class="main">
    <template v-if="error.statusCode === 404">
      <div class="content">
        <h1 class="title">OPS, PÁGINA NÃO ENCONTRADA...</h1>
        <img class="image" src="/404.png" />
        <a class="link" href="/">VOLTAR AO INICIO</a>
      </div>
    </template>
    <template v-else>
      <div class="content">
        <h1 class="title">OPS, ERRO {{ error.statusCode }}...</h1>
        <img class="image" src="/404.png" />
        <a class="link" href="/">VOLTAR AO INICIO</a>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  props: ["error"],
  layout: "site/default",
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}

.content {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #19191c;
  border-radius: 20px;
  max-width: 1050px;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 65px;
}

.title {
  color: white;
  font-size: 36px;
  letter-spacing: 0.1em;
  margin-bottom: 18px;
}

.image {
  display: block;
  width: 100%;
  max-width: 413px;
}

.link {
  background-color: #f73b91;
  color: white;
  padding: 15px 23px 13px 21px;
  border-radius: 5px;
  transition: filter 0.2s;
  margin-top: 18px;
}

.link:hover {
  filter: brightness(0.9);
}

@media (max-width: 620px) {
  .title {
    font-size: 24px;
    text-align: center;
  }
}
</style>
