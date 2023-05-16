import { useTagStore } from "@/store";

export default function collect() {
  const store = useTagStore();

  const zero = store.initialLayout.indexOf(0);

  store.initialLayout.splice(zero, 1);
  store.initialLayout.sort((a, b) => a - b);
  store.initialLayout.push(0);

  store.assembleQuickly = true;
}
