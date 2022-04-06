<template>
  <div class="body-wraper">
    <div class="title-holder">
      <div :class="`question ${showIcon? 'show':''}`"><div>?</div></div>
      <div :class="`title ${showTitle? 'show':''}`">Quiz</div>
    </div>
    <Quizzes/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
  data() {
    return {
      showTitle: false,
      showIcon: false
    }
  },
  created() {
    setTimeout(() => {
      this.showIcon = true;
    }, 500);

    setTimeout(() => {
      this.showTitle = true;
    }, 1000);
  },
})
</script>
<style scoped>
  .body-wraper {
    max-width: 600px;
    margin: auto;
    padding: 0 40px;
  }
  .title-holder {
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 150px;
    font-family: 'Press Start 2P', sans-serif;
  }
  .title {
    font-size: 42px;
  }

  .question {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 180px;
    padding-left: 20px;
    color: var(--color-brown);
  }

  .title {
    transform: translate3d(0, -280%, 0);
  }

  .title.show  {
    transform: translate3d(0, 0, 0);
    transition: transform .5s ease-out;
  }

  .question div{
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transform: translate3d(0, -120%, 0);
  }

  .question.show  div{
    opacity: .2;
    transform: translate3d(0, -150px, 0);
    transition: transform .4s ease-out, opacity .8s;
  }
</style>
