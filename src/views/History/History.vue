<template>
  <div class="page">
    <div class="rounded-3xl p-4 bg-white border border-gray-100 shadow-lg/5">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-base font-semibold text-gray-900">历史报告</div>
          <div class="text-xs text-gray-500 mt-1">用于复盘学习记录（演示）</div>
        </div>
        <van-button class="text-xs text-gray-500" @click="clearAllBatches()">
          清空
        </van-button>
      </div>

      <div id="batchHistoryList" class="mt-4 space-y-3">
        <template v-if="!list.length">
          <div
            class="rounded-3xl p-4 bg-gray-50 border border-gray-100 text-center"
          >
            <div class="text-sm font-semibold text-gray-900">暂无历史报告</div>
            <div class="text-xs text-gray-500 mt-1">
              去"批量识别"生成第一份知识汇总报告
            </div>
            <van-button
              class="mt-3 rounded-2xl primary-btn text-white px-4 py-3 text-sm font-semibold"
              @click="navTo('batch')"
            >
              去批量识别
            </van-button>
          </div>
        </template>
        <template v-else>
          <button
            class="w-full text-left rounded-3xl p-4 bg-white border border-gray-100 shadow-lg/5 active:scale-[0.99] transition"
            @click="navTo('batch')"
          >
            <div class="flex items-start justify-between">
              <div>
                <div class="text-sm font-semibold text-gray-900">
                  知识汇总 2026/1/31
                </div>
                <div class="text-xs text-gray-500 mt-1">
                  默认 · 2026/1/31 18:12:03
                </div>
              </div>
              <span
                class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 chip"
                >1件</span
              >
            </div>
            <div class="mt-3 grid grid-cols-3 gap-2">
              <div class="rounded-2xl bg-gray-50 border border-gray-100 p-2">
                <div class="text-[11px] text-gray-500">平均置信</div>
                <div class="text-sm font-semibold">76%</div>
              </div>
              <div class="rounded-2xl bg-gray-50 border border-gray-100 p-2">
                <div class="text-[11px] text-gray-500">主要评级</div>
                <div class="text-sm font-semibold">A+</div>
              </div>
              <div class="rounded-2xl bg-gray-50 border border-gray-100 p-2">
                <div class="text-[11px] text-gray-500">种类数</div>
                <div class="text-sm font-semibold">1</div>
              </div>
            </div>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavTo } from "@/hooks/useNavTo";
import { showToast } from "vant";
import { ref } from "vue";

const navTo = useNavTo();
const list = ref([{}]);
function clearAllBatches() {
  list.value = [];
  showToast("已清空历史报告");
}
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
.diff-panel {
  background-color: #fff;
  border: 1px solid rgb(243 244 246);
  padding: 16px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.static-panel {
  .in-top {
    gap: 12px;
    button {
      cursor: pointer;
      padding: 16px;
    }
  }
  .in-bottom {
    button {
      cursor: pointer;
    }
  }
}
</style>
