<template>
  <template v-if="list.length == 0">
    <div class="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-center">
      <div class="text-sm font-semibold text-gray-900">识别清单为空</div>
      <div class="text-xs text-gray-500 mt-1">点击"添加一项"模拟批量识别</div>
    </div>
  </template>

  <template v-else>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="rounded-2xl bg-gray-50 border border-gray-100 p-4"
    >
      <div class="flex items-start justify-between">
        <div>
          <div class="text-sm font-semibold text-gray-900">
            {{ item.name }}
            <span class="text-xs font-normal text-gray-500"
              >· {{ item.level }}</span
            >
          </div>
          <div class="text-xs text-gray-500 mt-1">
            置信度 {{ item.reliability }} · 建议存储 {{ item.storageDays }} 天
          </div>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              class="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
              >{{ item.level }}</span
            >

            <span
              class="text-xs px-2 py-1 rounded-full bg-gray-50 border border-gray-200"
              >热量</span
            >

            <span
              class="text-xs px-2 py-1 rounded-full bg-gray-50 border border-gray-200"
              >维生素C</span
            >
          </div>
        </div>
        <van-button
          plain
          class="text-xs text-gray-400 border-none btn-clear-item"
          @click="removeItem(item)"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </van-button>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { genRandomItem } from "./batchListUtils";

type BatchItem = {
  name: string;
  level: string;
  reliability: number;
  storageDays: number;
};
const list = ref<BatchItem[]>([]);

const addItem = () => {
  const item = genRandomItem();
  list.value.push(item);
};
const clearAll = () => {
  list.value = [];
};
const removeItem = (item: BatchItem) => {
  list.value = list.value.filter((_item) => _item != item);
};

defineExpose({
  addItem,
  clearAll,
  list,
});
</script>

<style lang="scss" scoped>
.btn-clear-item {
  position: relative;
  top: -16px;
  right: -16px;
}
</style>
