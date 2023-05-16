import { useTagStore } from "@/store";

export default function genRandom() {
  const store = useTagStore();

  const randomNum: number = Math.round(Math.random() * 15);

  if (randomNum === 0 || store.initialLayout.includes(randomNum)) {
    genRandom();
  } else {
    store.initialLayout.push(randomNum);
  }
}
