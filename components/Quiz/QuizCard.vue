<template>
<NuxtLink :to="`/quizzes/${quiz.slug}`">
<div class="card">
  {{ quiz.name }}
</div>
</NuxtLink>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import {IQuiz} from "@/interfaces/quiz"

export default Vue.extend({
    props: {
        quiz: {
            type: Object,
            required: true
        } as PropOptions<IQuiz>
    },
});
</script>
<style scoped>
a {
  text-decoration: none;
}

.card {
  margin: 15px auto;
  width: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 3px rgb(110 109 107 / 22%);
  cursor: pointer;
  transition: 0.3s;
  background: var(--color-orange);
  color: var(--color-yellow);
  padding: 10px 30px;
  font-size: 18px;
}

.card:hover {
  transform: scale(0.95, 0.95);
  box-shadow: 5px 5px 20px 5px rgb(110 109 107 / 22%);
}
</style>