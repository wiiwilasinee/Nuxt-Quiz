<template>
    <div class="q-holder">
        <transition name="slide">
        <div class="intro" v-if="display == 'intro'">
            <div class="content">
                <div class="player-info">
                    <h1 class="quiz-title">{{ quiz.name }}</h1>
                    <label for="player_name" >What's your name, challenger? *</label>
                    <span>Just your first one or a nickname is fine.</span>
                    <input ref="playerName" type="text" v-model="playerName" name="player_name" id="player_name">
                    <button @click="setDisplay('pre-question')">Enter</button>
                </div>
            </div>
        </div>
        </transition>
        <transition name="slide">
        <div class="intro" v-if="display == 'pre-question'">
            <div class="content">
                <div class="quiz-info">
                    <h1 class="quiz-title">{{ quiz.name }}</h1>
                    <div class="greeting">Hello {{ playerName }}!</div>
                    <span>This quiz is about {{ quiz.questions.length }} questions</span>
                    <span>If you ready so press Let's go</span>
                    <button @click="setDisplay(quiz.questions[0].id)">Let's go !</button>
                </div>
            </div>
        </div>
        </transition>
        <transition name="slide" v-for="(question, index) in quiz.questions" :key="question.id">
            <div class="question" v-if="display == question.id">
                <div class="content">
                <QuestionCard :question="question" :last="index+1 === quiz.questions.length" :next-display="getNextDisplay(index)" @set-display="setDisplay" @set-result="setResult" />
                </div>
            </div>
        </transition>
        <transition name="slide">
        <div class="result" v-if="display == 'result'">
            <div class="content">
                <QuizResult :results="results" />
            </div>
        </div>
        </transition>
    </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import {IQuizQuestions, IAnswer} from "@/interfaces/quiz"

export default Vue.extend({
    props: {
        quiz: {
            type: Object,
            required: true
        } as PropOptions<IQuizQuestions>
    },
    data() {
        return {
            display: "intro" as String,
            playerName: "" as String,
            results: [] as IAnswer[],
        }
    },
    mounted() {
        const playerName = this.$refs.playerName as HTMLInputElement;
        playerName.focus();
    },
    methods: {
        getNextDisplay(index: number) {
            if(index+1 === this.quiz.questions.length) {
                return "result";
            } else {
                return this.quiz.questions[index+1].id.toString();
            }
        },
        setDisplay(next: String) {
            this.display = next;
        },
        setResult(result: IAnswer) {
            this.results.push(result);
        }
    },
    
})
</script>
<style scoped>
.q-holder {
    position: fixed;
    width: 100vw;
    height: 100vh;
}

.intro, .question, .result {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
.player-info label,
.quiz-info .greeting {
    font-size: 28px;
}
.player-info span,
.quiz-info span {
    display: block;
    font-size: 18px;
    line-height: 20px;
    font-weight: 300;
    color: var(--color-orange);
    margin-bottom: 5px;
}
</style>