<template>
  <div class="result-holder">
    <div :class="`smiley ${success? 'happy':'normal'} `"> 
      <!-- normal -->
      <div class="steam-container">
        <div class="squiggle-container squiggle-container-1">
          <div class="squiggle">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28.1 80.6"
              style="enable-background: new 0 0 28.1 80.6"
              xml:space="preserve"
            >
              <path
                class=""
                fill="none"
                stroke-width="11"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
              />
            </svg>
          </div>
          <!-- end .squiggle-->
        </div>
        <div class="squiggle-container squiggle-container-2">
          <div class="squiggle">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28.1 80.6"
              style="enable-background: new 0 0 28.1 80.6"
              xml:space="preserve"
            >
              <path
                class=""
                fill="none"
                stroke="#fff"
                stroke-width="11"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
              />
            </svg>
          </div>
          <!-- end .squiggle-->
        </div>
        <div class="squiggle-container squiggle-container-3">
          <div class="squiggle">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28.1 80.6"
              style="enable-background: new 0 0 28.1 80.6"
              xml:space="preserve"
            >
              <path
                class=""
                fill="none"
                stroke="#fff"
                stroke-width="11"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
              />
            </svg>
          </div>
          <!-- end .squiggle-->
        </div>
      </div>

      <div class="eyes">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="mouth"></div>
    </div>
    <div class="result-info">
      <h1 class="result-title">
        <template v-if="success">
          Excellence
          <span>Your score is more than 60%</span>
        </template>
        <template v-else>
          Try Again...
          <span>Your score is less than 60%</span>
        </template>
      </h1>
      <ul>
        <li v-for="res in results" :key="res.questionId">
          <div v-if="res.answer.id === res.correct.id" class="correct">
            {{ res.answer.content }}
            <div class="ui-success">
              <svg
                viewBox="0 0 87 87"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="Group-3" transform="translate(2.000000, 2.000000)">
                    <circle
                      id="Oval-2"
                      stroke="rgba(165, 220, 134, 0.2)"
                      stroke-width="4"
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                    ></circle>
                    <circle
                      class="ui-success-circle"
                      id="Oval-2"
                      stroke="#A5DC86"
                      stroke-width="4"
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                    ></circle>
                    <polyline
                      class="ui-success-path"
                      id="Path-2"
                      stroke="#A5DC86"
                      stroke-width="4"
                      points="19 38.8036813 31.1020744 54.8046875 63.299221 28"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div v-else class="incorrect">
            <span class="answer">{{ res.answer.content }}</span>
            <span>{{ res.correct.content }}</span>
            <div class="ui-error">
		<svg  viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="Group-2" transform="translate(2.000000, 2.000000)">
						<circle id="Oval-2" stroke="rgba(252, 191, 191, .5)" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
						<circle  class="ui-error-circle" stroke="#F74444" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
							<path class="ui-error-line1" d="M22.244224,22 L60.4279902,60.1837662" id="Line" stroke="#F74444" stroke-width="3" stroke-linecap="square"></path>
							<path class="ui-error-line2" d="M60.755776,21 L23.244224,59.8443492" id="Line" stroke="#F74444" stroke-width="3" stroke-linecap="square"></path>
					</g>
			</g>
	</svg>
	</div>
          </div>
        </li>
      </ul>
      <NuxtLink :to="`/`">
        <button>Back</button>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { IAnswer } from "@/interfaces/quiz";

export default Vue.extend({
  props: {
    results: {
      type: Array,
      required: true,
    } as PropOptions<IAnswer[]>
  },
  data() {
    return {
      success: true as Boolean,
    }
  },
  mounted() {
    const fullScore = this.results.length;
    const playerScore = this.results.filter(res => res.is_correct).length;
    const minScore = fullScore * (60/100);
    if(playerScore < minScore) {
      this.success = false;
    }
  },
});
</script>
<style scoped>
.result-holder {
  min-width: 400px;
  padding: 50px;
}

.result-title {
  text-align: center;
}
.result-title span {
  display: block;
  color: var(--color-orange);
  font-weight: 400;
}
.result-info ul {
  text-align: center;
  margin: auto;
  padding: unset;
}
.result-info ul li {
  font-size: 18px;
  list-style-type: none;
}
.result-info .correct,
.result-info .incorrect span{
  color: #27ae60;
  text-decoration: none;
}
.result-info .incorrect span.answer {
  color: #e74c3c;
  text-decoration: line-through;
}


.result-info button {
  display: block;
  margin: 30px auto;
}

.ui-error, .ui-success {
    width: 20px;
    display: inline-block;
}

/* Smiley */

.smiley {
  background: linear-gradient(
    135deg,
    rgb(255, 233, 25) 0%,
    rgb(251, 192, 0) 100%
  );
  border-radius: 100%;
  padding: 25px;
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  box-shadow: rgb(255 193 7 / 20%) 0px 30px 30px 1px,
    rgb(18 18 18 / 10%) 0px 20px 10px 1px;
}

.mouth {
  width: 60%;
  height: 30%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-sizing: border-box;
  position: absolute;
  bottom: 18%;
  left: 50%;
  margin-left: -30%;
  background: #b57700;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.eyes {
  width: 100%;
  margin-top: 15%;
  box-sizing: border-box;
  padding: 0 5px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.eyes .eye {
  width: 20px;
  height: 20px;
  background: #b57700;
  float: left;
  border-radius: 100%;
  position: relative;
}

.eyes .eye:nth-of-type(2) {
  float: right;
}

.eyes .eye::after {
  content: "";
  display: block;
  position: absolute;
  width: 0%;
  height: 0%;
  background: #fed800;
  transform: rotate(0deg);
  top: -15px;
  left: 5px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.eyes .eye:first-of-type::after {
  transform: rotate(0deg);
  left: auto;
  right: 5px;
}

/* Normal animation */
.smiley.normal .mouth,
#normal[type="radio"]:checked ~ .smiley .mouth {
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  height: 10%;
  width: 40%;
  bottom: 25%;
  margin-left: -20%;
}

.smiley.normal .eyes,
#normal[type="radio"]:checked ~ .smiley .eyes {
  margin-top: 30%;
}

.smiley.happy .mouth,
#happy[type="radio"]:checked ~ .smiley .mouth {
  animation: move-mouth-down 6s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}

@keyframes move-mouth-down {
  0% {
    bottom: 18%;
  }

  4.55% {
    bottom: 16%;
  }

  8.45% {
    bottom: 16%;
  }

  13% {
    bottom: 18%;
  }
  100% {
    bottom: 18%;
  }
}

.smiley.happy .eyes,
#happy[type="radio"]:checked ~ .smiley .eyes {
  animation: move-eyes-down 6s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}

@keyframes move-eyes-down {
  0% {
    margin-top: 15%;
  }

  4.55% {
    margin-top: 19%;
  }

  8.45% {
    margin-top: 19%;
  }

  13% {
    margin-top: 15%;
  }

  100% {
    margin-top: 15%;
  }
}

.smiley.happy .eye:nth-of-type(2),
#happy[type="radio"]:checked ~ .smiley .eye:nth-of-type(2) {
  height: 20px;
  margin-top: 0;
  animation: wink 6s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}

@keyframes wink {
  0% {
    height: 20px;
    margin-top: 0;
  }

  3.9% {
    height: 3px;
    margin-top: 8px;
  }

  9.1% {
    height: 3px;
    margin-top: 8px;
  }

  13% {
    height: 20px;
    margin-top: 0;
  }

  100% {
    height: 20px;
    margin-top: 0;
  }
}

.smiley.normal .eye,
#normal[type="radio"]:checked ~ .smiley .eye {
  height: 20px;
  margin-top: 0;
  animation: blink 6s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}
#normal[type="radio"]:checked ~ .squiggle {
  color: transparent;
}

@keyframes blink {
  0% {
    height: 20px;
    margin-top: 0;
  }

  3.25% {
    height: 2px;
    margin-top: 8px;
  }

  6.5% {
    height: 20px;
    margin-top: 0;
  }

  9.75% {
    height: 2px;
    margin-top: 8px;
  }

  13% {
    height: 20px;
    margin-top: 0;
  }
  100% {
    height: 20px;
    margin-top: 0;
  }
}

/* STEAM */
.steam-container {
  position: relative;
  width: 100px;
  height: 0px;
  top: -40px;
  display: none;
}

.squiggle-container {
  width: 10px;
  height: 30px;
  display: inline-block;
}

.squiggle-container-1 {
  transform: translate(-10px, 20px);
}
.squiggle-container-1 .squiggle {
  animation: move-and-fade 2.5s linear infinite;
  animation-delay: 0.2s;
  width: 10px;
}
@keyframes move-and-fade {
  0% {
    opacity: 0;
    transform: translate(0, 10px);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
}
.squiggle-container-2 {
  transform: translateY(10px);
}
.squiggle-container-2 .squiggle {
  animation: move-and-fade 2.5s linear infinite;
  animation-delay: 0s;
  width: 10px;
}
@keyframes move-and-fade {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
.squiggle-container-3 {
  transform: translate(10px, 20px);
}
.squiggle-container-3 .squiggle {
  animation: move-and-fade 2.5s linear infinite;
  animation-delay: 0.4s;
  width: 10px;
}
@keyframes move-and-fade {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: translateY(-15px);
    opacity: 0;
  }
}
.squiggle {
  stroke-dasharray: 100;
}
.squiggle path {
  stroke: #fc635d;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  50% {
    stroke-dashoffset: 500;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.ui-success-circle {
  stroke-dasharray: 260.75219025px, 260.75219025px;
  stroke-dashoffset: 260.75219025px;
  transform: rotate(220deg);
  transform-origin: center center;
  stroke-linecap: round;
  animation: ani-success-circle 1s ease-in both;
}
.ui-success-path {
  stroke-dasharray: 60px 64px;
  stroke-dashoffset: 62px;
  stroke-linecap: round;
  animation: ani-success-path 0.4s 1s ease-in both;
}
@keyframes ani-success-circle {
  to {
    stroke-dashoffset: 782.25657074px;
  }
}
@keyframes ani-success-path {
  0% {
    stroke-dashoffset: 62px;
  }
  65% {
    stroke-dashoffset: -5px;
  }
  84% {
    stroke-dashoffset: 4px;
  }
  100% {
    stroke-dashoffset: -2px;
  }
}
.ui-error-circle {
  stroke-dasharray: 260.75219025px, 260.75219025px;
  stroke-dashoffset: 260.75219025px;
  animation: ani-error-circle 1.2s linear;
}
.ui-error-line1 {
  stroke-dasharray: 54px 55px;
  stroke-dashoffset: 55px;
  stroke-linecap: round;
  animation: ani-error-line 0.15s 1.2s linear both;
}
.ui-error-line2 {
  stroke-dasharray: 54px 55px;
  stroke-dashoffset: 55px;
  stroke-linecap: round;
  animation: ani-error-line 0.2s 0.9s linear both;
}
@keyframes ani-error-line {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes ani-error-circle {
  0% {
    stroke-dasharray: 0, 260.75219025px;
    stroke-dashoffset: 0;
  }
  35% {
    stroke-dasharray: 120px, 120px;
    stroke-dashoffset: -120px;
  }
  70% {
    stroke-dasharray: 0, 260.75219025px;
    stroke-dashoffset: -260.75219025px;
  }
  100% {
    stroke-dasharray: 260.75219025px, 0;
    stroke-dashoffset: -260.75219025px;
  }
}

</style>