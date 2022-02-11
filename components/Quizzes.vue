<template>
  <div class="cards-list">
    <QuizCard v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {IQuiz} from "@/interfaces/quiz";

export default Vue.extend({
  data() {
    return {
      quizzes: [] as IQuiz[],
    };
  },
  created() {
      this.fetchQuizzes();

      // this.quizzes = this.$store.getters.loadedQuizzes
  },
  methods: {
    async fetchQuizzes(): Promise<void> {
        const quizzes = await this.$axios.$get("/api/quizzes");
        this.quizzes = quizzes;
    },
  },
});
</script>
<style scoped>
.cards-list {
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px
}
</style>