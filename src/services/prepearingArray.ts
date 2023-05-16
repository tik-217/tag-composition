import { useTagStore } from "@/store";

export default function preparingArray(num: number) {
  const store = useTagStore();

  const newLayout = store.initialLayout;
  const preparedArray: number[][] = [];

  const coord = {
    x: 0,
    y: 0,
  };

  // cut the array into 4 parts
  const chunkSize = 4;

  for (let i = 0; i < newLayout.length; i += chunkSize) {
    const chunk = newLayout.slice(i, i + chunkSize);
    // getting a position y in chank
    const existInChank = chunk.indexOf(num);

    // getting click by x and y
    if (existInChank >= 0) {
      coord.x = existInChank;
      coord.y = i / 4;
    }

    preparedArray.push(chunk);
  }

  return { preparedArray, coord };
}
