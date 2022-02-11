<template>
    <div>
        <div :class="`loader ${loading? 'loading':''}`">
            <IconLoading />
        </div>
        <QuizQuestions v-if="!loading" :quiz="quiz" />
    </div>
</template>
<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import {IQuiz} from "@/interfaces/quiz";

export default Vue.extend({
  validate(data) {
    return data.params.slug !== null;
  },
  async asyncData(ctx: Context) {
    const {data} = await ctx.$axios.get(`/api/quizzes/${ctx.params.slug}/questions`);
    const quiz = data;
    
    return { 
      quiz
    }
  },
  data() {
    return {
      quiz: {} as IQuiz,
      loading: true
    };
  },
  created() {
    setTimeout(() => {
        this.loading = false;
        
    }, 500);
  },
});
</script>
<style scoped>
.loader {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity .8s;
}

.loader.loading {
    opacity: 1;
}

.loader svg {
    width: 150px;
}
</style>
