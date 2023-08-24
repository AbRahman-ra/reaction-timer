<template>
  <section ref="game" class="game" v-show="showGame" @click="endGame">
    Click it fast baby ⚡🚀
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["delay"],
  data() {
    return {
      showGame: false,
      timer: -1, // timer function
      seconds: 0, // seconds passed
      top: 0,
      left: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.top = 100 * Math.random();
      this.left = 100 * Math.random();
      let gameBlock = this.$refs.game as HTMLDivElement;
      gameBlock.style.top = `${this.top}%`;
      gameBlock.style.left = `${this.left}%`;
      this.showGame = true;
      this.startTimer();
      console.log("Game Started");
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.seconds += 0.1;
        console.log(this.seconds);
      }, 100);
    },
    endGame() {
      clearInterval(this.timer);
      console.log(`seconds passed is: ${this.seconds}`);
      this.$emit("endGame", this.seconds);
      this.seconds = 0;
    },
  },
});
</script>
