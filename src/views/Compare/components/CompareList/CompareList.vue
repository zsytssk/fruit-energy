<template>
  <div class="mt-3 space-y-2">
    <div
      v-for="item in list"
      :key="item.id"
      class="rounded-2xl border border-gray-200 p-3 bg-white"
    >
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-start gap-3">
          <van-checkbox
            shape="square"
            :name="item.name"
            v-model="item.select"
          />
          <div class="flex-[1]">
            <div class="text-sm font-semibold text-gray-900">
              {{ item.name }}
              <span class="text-xs font-normal text-gray-500"
                >· 扫一扫识别</span
              >
            </div>
            <div class="text-xs text-gray-500 mt-1">
              {{ formateDate(item.time!) }} · 置信度 {{ item.reliability }}% ·
              营养评级 {{ item.level }}
            </div>
            <div class="mt-2 flex flex-wrap gap-2">
              <span
                class="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >{{ item.level }}</span
              >

              <span
                v-for="ni in item.nutrition"
                class="text-xs px-2 py-1 rounded-full border"
                :class="ni.color"
                >{{ ni.label }} {{ ni.value }}</span
              >
            </div>
          </div>
        </div>
        <button class="text-xs text-gray-400" @click="removeItem(item)">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCompareListStore } from "@/store/compareList";
import { formateDate } from "@/utils/utils";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useCompareListStore();
const { removeItem } = store;
const { list } = storeToRefs(store);
const selectNum = computed(() => {
  return list.value.filter((item) => item.select)?.length || 0;
});
</script>

<style lang="scss" scoped></style>
