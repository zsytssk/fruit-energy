<template>
  <div class="page">
    <div class="rounded-3xl p-4 bg-white border border-gray-100 shadow-lg/5">
      <div class="flex items-start justify-between">
        <div>
          <div class="text-base font-semibold text-gray-900">批量识别</div>
          <div class="text-xs text-gray-500 mt-1">
            适用于学习：逐件识别，生成知识汇总
          </div>
        </div>
        <button
          class="text-xs text-blue-600"
          @click="showToast('已新建批量识别任务')"
        >
          新建
        </button>
      </div>

      <div class="mt-3 grid grid-cols-2 gap-2">
        <input
          id="batchName"
          class="rounded-2xl border border-gray-200 px-3 py-2 text-sm"
          placeholder="报告名称：如 今日学习"
        />
        <select-type />
      </div>

      <div class="mt-3">
        <div class="text-xs text-gray-500 mb-1">本次品类（可选）</div>
        <select-fruit-type class="" />
        <div class="text-[11px] text-gray-500 mt-1">
          演示：不选则随机生成；选定品类便于知识汇总。
        </div>
      </div>

      <div class="mt-4 flex gap-2">
        <button
          class="flex-1 rounded-2xl primary-btn text-white px-3 py-3 text-sm font-semibold"
          @click="addItem()"
        >
          <i class="fa-solid fa-plus mr-2"></i>添加一项（模拟识别）
        </button>
        <button
          class="flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm"
          @click="showToast('已开启快速识别模式（演示）')"
        >
          <i class="fa-solid fa-bolt mr-2"></i>快速模式
        </button>
      </div>

      <div class="mt-4 grid grid-cols-3 gap-2">
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">识别件数</div>
          <div id="batchCount" class="text-lg font-semibold mt-1">0</div>
        </div>
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">营养评级</div>
          <div id="batchGrade" class="text-lg font-semibold mt-1">A+</div>
        </div>
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">平均置信度</div>
          <div id="batchAvgConf" class="text-lg font-semibold mt-1">--</div>
        </div>
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
          <div class="text-sm font-semibold text-gray-900">本次清单</div>
          <van-button class="text-xs text-gray-500" @click="clearAll()">
            清空
          </van-button>
        </div>
        <div id="batchList" class="space-y-2">
          <batch-list ref="batchListRef" />
        </div>
      </div>

      <div class="mt-4">
        <button
          id="btnBatchReport"
          class="w-full rounded-2xl accent-btn text-white px-3 py-3 text-sm font-semibold disabled:opacity-40"
          @click="navTo('batchReport')"
          :disabled="!batchListRef || batchListRef?.list.length == 0"
        >
          <i class="fa-solid fa-file-lines mr-2"></i>生成知识汇总报告
        </button>
      </div>

      <div class="mt-3 text-xs text-gray-500">
        <i class="fa-solid fa-circle-info mr-1"></i>
        演示：每次"添加一项"会生成一条水果知识，可作为学习参考。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavTo } from "@/hooks/useNavTo";
import { showToast } from "vant";
import { ref } from "vue";
import SelectType from "./components/selectType.vue";
import SelectFruitType from "./components/selectFruitType.vue";
import BatchList from "./components/batchList.vue";

const navTo = useNavTo();
const config = ref<any>({});

const addItem = () => {
  batchListRef.value?.addItem();
};
const clearAll = () => {
  batchListRef.value?.clearAll();
};
const genReport = () => {};
const batchListRef = ref<InstanceType<typeof BatchList>>();
</script>

<style lang="scss" scoped>
.page {
  padding: 16px;
  background: rgba(253, 245, 230, 0.5);
  .page-title {
    font-size: 16px;
  }
  .van-button {
    border: none;
  }
}
</style>
