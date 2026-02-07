<template>
  <div class="flex-col flex space-y-3">
    <button
      v-for="item in list"
      :key="item.id"
      class="w-full text-left rounded-3xl p-4 bg-white border border-gray-100 shadow-soft active:scale-[0.99] transition"
      onclick="openScanResult('scan_8d435ffa0454c_19c35fcf94f')"
    >
      <div class="flex items-start justify-between">
        <div>
          <div class="text-sm font-semibold text-gray-900">{{ item.name }}</div>
          <div class="text-xs text-gray-500 mt-1">
            {{ formateDate(item.time!) }} · 置信度 {{ item.reliability }}%
          </div>
        </div>
        <span
          class="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 chip"
          ><span>{{ item.grade }}</span
          >级</span
        >
      </div>
      <div class="mt-3 flex flex-wrap gap-1">
        <span
          v-for="nu in item.nutrition"
          :key="nu.label"
          :class="nu.color"
          class="nutri-badge"
          >{{ nu.label }} {{ nu.value }}</span
        >
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useScanListStore } from "@/store/scanList";
import { formateDate } from "@/utils/utils";

const { list } = useScanListStore();
</script>
<style lang="scss" scoped></style>
