import { defineStore } from "pinia";
import { ref } from "vue";

export const useScanListStore = defineStore("ScanList", () => {
  const list = ref<FruitItem[]>([]);
  const addItem = (item: FruitItem) => {
    list.value = [...list.value, item];
  };
  const removeItem = (item: FruitItem) => {
    list.value = list.value.filter((_item) => _item !== item);
  };
  const clear = () => {
    list.value = [];
  };

  return { list, addItem, removeItem, clear };
});
