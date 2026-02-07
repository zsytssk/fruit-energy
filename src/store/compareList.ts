import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCompareListStore = defineStore("CompareList", () => {
  const list = ref<FruitItem[]>([]);
  const addItem = (item: FruitItem) => {
    list.value?.push(item);
  };
  const removeItem = (item: FruitItem) => {
    list.value = list.value?.filter((_item) => _item !== item);
  };
  const clear = () => {
    list.value = [];
  };

  const selectItem = (item: FruitItem, status: boolean) => {
    if (item.select === status) {
      return;
    }
    item.select = status;
  };

  const selectNum = computed(() => {
    return list.value.filter((item) => item.select)?.length || 0;
  });

  return { list, selectNum, addItem, removeItem, clear, selectItem };
});
