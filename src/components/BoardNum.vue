<template>
  <div class="board">
    <div class="board__wrap">
      <h3>{{ store.score }}</h3>
      <p>Best score: {{ store.bestScore }}</p>
      <div class="board__num">
        <template v-for="elem in store.initialLayout" :key="elem">
          <div
            :class="[elem === 0 && 'board__num_empty-num']"
            @click="moveNum(elem)"
          >
            {{ elem }}
          </div>
        </template>
      </div>
      <button @click="collect">Собрать</button>
      <button v-if="store.assembleQuickly" @click="mixNum">Размешать</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// store
import { useTagStore } from "@/store";

// srvices
import moveNum from "@/services/moveNum";
import collect from "@/services/collect";
import mixNum from "@/services/mixNum";
import genInitialLayout from "@/services/genInitialLayout";
import keyboardControl from "@/services/keyboardControl";

// vue
import { onMounted, nextTick, onBeforeUnmount } from "vue";

const store = useTagStore();

// watch
store.$subscribe((mutation, state) => {
  const result = state.initialLayout.every(
    (el: number, i: number, arr: number[]) =>
      i === 15 || i === 0 || el >= arr[i - 1]
  );

  if (result) {
    setTimeout(() => {
      alert("Game complete");
    }, 100);

    if (!state.assembleQuickly) {
      localStorage.setItem("score", JSON.stringify(state.score));
    }

    state.score = 0;
  }
});

// lifecicle
onMounted(() => {
  nextTick(() => {
    genInitialLayout();
  });
});

document.addEventListener("keydown", keyboardControl);

onBeforeUnmount(() => {
  document.removeEventListener("keydown", keyboardControl);
});
</script>

<style scoped lang="scss">
.board {
  height: 100%;
}

.board__wrap {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 30px;
  }

  .board__num {
    background: #745;
    box-shadow: rgb(119 68 85) 0px 50px 100px -20px,
      rgb(119 68 85) 0px 30px 60px -30px;
    padding: 10px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    div {
      height: 100px;
      width: 100px;
      background: #fff;
      display: flex;

      align-items: center;
      justify-content: center;
      font-size: 30px;
      border-radius: 10px;

      margin: 10px;
      user-select: none;
      cursor: pointer;

      -webkit-appearance: none;
      appearance: none;
    }

    .board__num_empty-num {
      background: none;
      cursor: auto;
      color: transparent;
    }
  }

  button {
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    margin-top: 20px;
    background: white;
    font-size: 13px;
    color: #925368;
    cursor: pointer;
    font-weight: 600;
    border: 2px solid #925368;
    box-shadow: 0 14px 28px rgb(119 68 85 / 36%), 0 10px 10px rgb(0 0 0 / 2%);
  }
}

@media screen and (max-height: 730px) {
  .board__wrap .board__num {
    div {
      height: 80px;
      width: 80px;
      margin: 6px;
    }
  }
}

@media screen and (max-height: 600px) {
  .board__wrap .board__num {
    padding: 8px;
    div {
      height: 50px;
      width: 50px;
      margin: 5px;
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 500px) {
  .board__wrap .board__num {
    div {
      margin: 6px;
    }
  }
}

@media screen and (max-width: 450px) {
  .board__wrap .board__num {
    div {
      height: 60px;
      width: 60px;
      margin: 5px;
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 350px) {
  .board__wrap .board__num {
    div {
      height: 55px;
      width: 55px;
    }
  }
}
</style>
