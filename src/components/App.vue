<template>
  <BoardNum />
  <div class="abilityControlKeyboard">
    <img
      src="../assets/icons/icons8-keyboard-64.png"
      :id="blinking1 ? 'blink' : 'unblinking'"
      alt=""
    />
    <img
      src="../assets/icons/icons8-arrow-keys-64.png"
      :id="blinking2 ? 'blink' : 'unblinking'"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import BoardNum from "./BoardNum.vue";

let blinking1 = ref(true).value;
let blinking2 = ref(false).value;

// lifecicle
onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      blinking1 = false;
    }, 4000);

    setTimeout(() => {
      blinking2 = true;
    }, 4100);

    setTimeout(() => {
      blinking2 = false;
    }, 8000);
  });
});
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.abilityControlKeyboard {
  position: absolute;
  top: 40px;
  right: 40px;
}

#unblinking {
  display: none;
}

#blink {
  -webkit-animation: blink 4s linear infinite;
  animation: blink 4s linear infinite;
  opacity: 0;
}
@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 990px) {
  .abilityControlKeyboard {
    display: none;
  }
}
</style>
