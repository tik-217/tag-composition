import { useTagStore } from "@/store";
import type { ICoord } from "@/types";
import { gettingZeroPosition } from "./getZeroPosition";

export default function moveNum(num: number) {
  const store = useTagStore();

  const { coord, zeroEnvironment } = gettingZeroPosition(num);
  let isZeroZero = false;

  Object.values(zeroEnvironment).forEach((el: ICoord) => {
    const elArr = Object.values(el);
    const coordArr = Object.values(coord);

    // Filtering of all available numbers to change the position. The number selected by the user is returned
    const choosenClickELem = elArr.filter(
      (value, index) => value === coordArr[index]
    );

    if (choosenClickELem.length !== 2) return;

    if (isZeroZero === false) {
      const zeroZero = choosenClickELem.every(
        (el: number, i: number, arr: number[]) =>
          i === 0 || (el === 0 && arr[i - 1] === 0)
      );

      store.score++;

      if (zeroZero) {
        isZeroZero = zeroZero;
        return;
      }
    }

    const posNum = store.initialLayout.indexOf(num);
    const posZero = store.initialLayout.indexOf(0);

    store.zeroPosInit.x = el.x;
    store.zeroPosInit.y = el.y;

    store.initialLayout[posNum] = 0;
    store.initialLayout[posZero] = num;
  });
}
