import type { ICoord, IState } from "@/types";
import { defineStore } from "pinia";

export const useTagStore = defineStore("tag", {
  state: (): IState => ({
    initialLayout: [],
    bestScore: localStorage.getItem("score") ?? "0",
    zeroPosInit: {
      x: 3,
      y: 3,
    },
    assembleQuickly: false,
    score: 0,
  }),
  getters: {
    getInitialLayout: (state) => state.initialLayout,
    getBestScore: (state) => state.bestScore,
    getZeroPosInit: (state) => state.zeroPosInit,
    getAssembleQuickly: (state) => state.assembleQuickly,
    getScore: (state) => state.score,
  },
  actions: {
    setInitialLayout(state: IState, payload: number[]) {
      state.initialLayout = payload;
    },
    setBestScore(state: IState, payload: string) {
      state.bestScore = payload;
    },
    setZeroPosInit(state: IState, payload: ICoord) {
      state.zeroPosInit = payload;
    },
    setAssembleQuickly(state: IState, payload: boolean) {
      state.assembleQuickly = payload;
    },
    setScore(state: IState, payload: number) {
      state.score = payload;
    },
  },
});
