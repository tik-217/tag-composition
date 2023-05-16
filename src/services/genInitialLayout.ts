import { useTagStore } from "@/store";
import genRandom from "./getRandom";

export default function genInitialLayout() {
  const store = useTagStore();
  store.initialLayout = [];

  for (let i = 0; i <= 14; i++) {
    genRandom();
  }
  store.initialLayout.push(0);
}
