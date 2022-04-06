<template>
  <div class="quizzes-info-wrapper">
    <div class="search-wrapper">
      <input class="search-input" type="text" v-model="search" name="search" id="search" placeholder="Search quiz by name" @keyup.enter="enterSearch">
      <div class="search-icon">
        <IconSearch />
      </div>
      <p v-show="search && search != toSearch">Please enter to search result..</p>
    </div>
    <div class="expaination">Choose one of quiz which you like to participate</div>
    <div class="cards-list">
      <QuizCard v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {IQuiz} from "@/interfaces/quiz";

export default Vue.extend({
  data() {
    return {
      quizzes: [] as IQuiz[],
      search: "" as String,
      toSearch: "" as String,
    };
  },
  created() {
      this.fetchQuizzes();

      // this.quizzes = this.$store.getters.loadedQuizzes
  },
  methods: {
    async fetchQuizzes(): Promise<void> {
      
        const quizzes = await this.$axios.$get("/api/quizzes",{
          params:{
            search: this.toSearch
          }
        });
        this.quizzes = quizzes;
    },
    enterSearch() {
      if(this.search !== this.toSearch){
        this.toSearch = this.search;
        this.fetchQuizzes();
      }
    }
  },
  watch: {
    search() {
      if(!this.search && this.toSearch){
        this.enterSearch();
      }
    }
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
.quizzes-info-wrapper{
  position: relative;
  margin-top: 60px;
}
.expaination {
    text-align: center;
    margin-top: 20px;
    font-family: 'Oswald';
    font-size: 26px;
}
.search-wrapper {
  position: relative;
}
.search-wrapper p {
  margin: 0;
}
.search-input {
    border: 2px solid var(--color-orange);
    border-radius: 10px;
    font-size: 20px;
    margin: 0;
    box-sizing: border-box;
}
.search-icon {
    width: 32px;
    opacity: 0.3;
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>