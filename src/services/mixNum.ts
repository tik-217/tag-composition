import { useTagStore } from "@/store";
import genInitialLayout from "./genInitialLayout";

export default function mixNum() {
  const store = useTagStore();

  genInitialLayout();
  store.assembleQuickly = false;
  store.score = 0;

  store.zeroPosInit = {
    x: 3,
    y: 3,
  };
}
