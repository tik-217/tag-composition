import { useTagStore } from "@/store";
import moveNum from "./moveNum";

export default function keyboardControl(event: KeyboardEvent) {
  const store = useTagStore();

  if (event.code === "ArrowUp" || event.code === "KeyW") {
    const posNumIndex = store.initialLayout.findIndex((el) => el === 0) + 4;
    const posNum = store.initialLayout[posNumIndex];

    if (posNumIndex > 15) return;

    moveNum(posNum);
  }
  if (event.code === "ArrowDown" || event.code === "KeyS") {
    const posNumIndex = store.initialLayout.findIndex((el) => el === 0) - 4;
    const posNum = store.initialLayout[posNumIndex];

    if (posNumIndex < 0) return;

    moveNum(posNum);
  }
  if (event.code === "ArrowLeft" || event.code === "KeyA") {
    const posNumIndex = store.initialLayout.findIndex((el) => el === 0) + 1;
    const posNum = store.initialLayout[posNumIndex];

    if (
      posNumIndex < 0 ||
      posNumIndex === 4 ||
      posNumIndex === 8 ||
      posNumIndex === 12 ||
      posNumIndex >= 16
    )
      return;

    moveNum(posNum);
  }
  if (event.code === "ArrowRight" || event.code === "KeyD") {
    const posNumIndex = store.initialLayout.findIndex((el) => el === 0) - 1;
    const posNum = store.initialLayout[posNumIndex];

    if (
      posNumIndex < 0 ||
      posNumIndex === 3 ||
      posNumIndex === 7 ||
      posNumIndex === 11
    )
      return;

    moveNum(posNum);
  }
}
