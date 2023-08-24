<template>
  <section class="result">
    <h2>Your Reflex Time: {{ reactionTime }} seconds</h2>
    <p>{{ msg }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["reactionTime"],
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    if (this.reactionTime <= 0.5)
      this.msg =
        "You are a true superhero 🚀🔥⚡🦾, you have ultimate reflexes that makes you a very good and detail oriented person, good job 😊⭐";
    else if (this.reactionTime <= 1.2)
      this.msg =
        "Great! You have a very catchy eye 👁️, like a hawk 🦅, train yourself so that you catch in in 0.5 second or less 🦾";
    else if (this.reactionTime <= 2)
      this.msg =
        "Good job! you are a normal person with a good eye-catching skills 🙂, try to challenge yourself so that you finish it in less than 1.2 seconds";
    else if (this.reactionTime <= 3)
      this.msg =
        "Pretty slow 🐥, but it's not that bad. Train yourself to get it in less than 2 seconds";
    else this.msg = "Are you a turtle or what? 🥸🤡🐢";
  },
});
</script>
