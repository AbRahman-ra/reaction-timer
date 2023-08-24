<template>
  <Header />
  <button id="play-now" @click="startGame" :disabled="isPlaying">
    Play Now 🤩
  </button>
  <Game v-if="isPlaying" :delay="delay" @endGame="endGame" />
  <Results v-if="showResults" :reactionTime="reactionTime" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./assets/css/master.css";
import Header from "./components/Header.vue";
import Game from "./components/Game.vue";
import Results from "./components/Results.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      isPlaying: false,
      showResults: false,
      delay: 0,
      reactionTime: 0,
    };
  },
  components: {
    Header,
    Game,
    Results,
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.showResults = false;
      this.delay = 2000 + 3000 * Math.random();
      console.log(this.delay);
    },
    endGame(seconds: number) {
      this.isPlaying = false;
      this.showResults = true;
      this.reactionTime = +seconds.toPrecision(2);
    },
  },
});
</script>
