<template>
  <section>
    <div class="container">
      <img src="assets/img/logo.png" :alt="message"/>
      <p>{{ message }}</p>
      <div id="gameDiv">
        {{createCanvas()}}
      </div>
    </div>
  </section>
</template>

<script>
  // Жду на курсе по вью: https://tocode.ru/curses/vuejs-s-nylya-do-pro
  // Скидка по промокоду: "WEBPACK" ;)


  // const app = new PIXI.Application({
  //   width: 800,
  //   height: 600,
  //   backgroundColor: 0x000000
  // });
  // document.body.appendChild(this.app.view);

  export default {
    data() {
      return {
        message: "Example Vue component",
      }
    },
    methods: {
        createCanvas() {
        }
      }
    };
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
  }

  img {
    max-width: 200px;
  }
</style>
