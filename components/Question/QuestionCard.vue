<template>
    <div class="question-card">
        <label class="q-content" >{{ question.content }}?</label>
        <div class="options-container" >
            <label :for="option.id" :class="`q-option ${answer === option.id? 'active':''}`" v-for="(option, i) in question.options" :key="option.id" >
                <input type="radio" :id="option.id" :name="question.id" :value="option.id" v-model="answer" >
                <span class="choice-tag">{{ alphabet[i] }}</span><span class="choice-content">{{ option.content }}</span>
            </label>
        </div>
        <button v-if="answer !== null" @click="next">{{ nextDisplay === "result"? 'See The Result' : 'Next' }}</button>
    </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import {IQuestion} from "@/interfaces/quiz"

export default Vue.extend({
    props: {
        question: {
            type: Object,
            required: true
        } as PropOptions<IQuestion>,
        nextDisplay: String
    },
    data() {
        return {
            alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            answer: null,
        }
    },
    methods: {
        async next() {
            if(!this.answer) return;
            
            const {correct, answer, is_correct} = await this.$axios.$get(`/api/options/${this.answer}/answer-check`);
            this.$emit('set-result', {
                questionId: this.question.id,
                correct,
                answer,
                is_correct,
            });

            this.$emit('set-display', this.nextDisplay);
        }
    },
})
</script>
<style scoped>
.q-content {
    font-size: 28px;
}
.options-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 15px;
    margin-top: 30px;
}
.q-option {
    cursor: pointer;
    width: calc(50% - 40px);
    min-width: 200px;
    padding: 15px 10px;
    border: 2px solid var(--color-orange);
    background-color: rgb(199 107 42 / 20%);
    border-radius: 4px;
    transition: background-color .5s;
}

.q-option:hover{
    background-color: rgb(199 107 42 / 80%);
    transition: background-color .5s;
}
.q-option.active{ 
    background-color: rgb(199 107 42 / 30%);
}
.q-option .choice-tag {
    background-color: var(--color-yellow);
    border: 2px solid var(--color-orange);
    padding: 3px 9px;
}
.q-option.active .choice-tag {
    background-color: var(--color-orange);
    color: var(--color-yellow);

}
.choice-content {
    margin-left: 10px;
}
input[type=radio] {
    display: none;
}
</style>