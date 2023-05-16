import { useTagStore } from "@/store";
import type { IZeroEnvironment } from "@/types";
import preparingArray from "./prepearingArray";

export function gettingZeroPosition(num: number) {
  const store = useTagStore();
  const { preparedArray, coord } = preparingArray(num);

  // North — север
  // South — юг
  // East — восток
  // West – запад
  const zeroEnvironment: IZeroEnvironment = {
    north: {
      x: 0,
      y: 0,
    },
    east: {
      x: 0,
      y: 0,
    },
    south: {
      x: 0,
      y: 0,
    },
    west: {
      x: 0,
      y: 0,
    },
  };

  // north
  if (store.zeroPosInit.y - 1 >= 0) {
    zeroEnvironment.north.y = store.zeroPosInit.y - 1;
    zeroEnvironment.north.x = store.zeroPosInit.x;
  }

  // east
  if (preparedArray.length - 1 >= store.zeroPosInit.x + 1) {
    zeroEnvironment.east.x = store.zeroPosInit.x + 1;
    zeroEnvironment.east.y = store.zeroPosInit.y;
  }

  // south
  if (preparedArray.length - 1 >= store.zeroPosInit.y + 1) {
    zeroEnvironment.south.y = store.zeroPosInit.y + 1;
    zeroEnvironment.south.x = store.zeroPosInit.x;
  }

  // west
  if (store.zeroPosInit.x - 1 >= 0) {
    zeroEnvironment.west.x = store.zeroPosInit.x - 1;
    zeroEnvironment.west.y = store.zeroPosInit.y;
  }

  if (store.zeroPosInit.x === 3 && store.zeroPosInit.y === 3) {
    zeroEnvironment.east.x = -1;
    zeroEnvironment.east.y = -1;

    zeroEnvironment.south.x = -1;
    zeroEnvironment.south.y = -1;
  }

  return { coord, zeroEnvironment };
}
