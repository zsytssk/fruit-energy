<template>
  <div class="page">
    <div class="rounded-3xl p-4 bg-white border border-gray-100 shadow-lg/5">
      <div class="flex items-start justify-between">
        <div>
          <div class="text-base font-semibold text-gray-900" id="reportTitle">
            123123123
          </div>
          <div class="text-xs text-gray-500 mt-1" id="reportMeta">
            默认 · 2026/1/31 18:04:33 · 1件
          </div>
        </div>
        <span
          class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 chip"
          >可导出</span
        >
      </div>

      <div class="mt-4 grid grid-cols-3 gap-2">
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">识别总数</div>
          <div id="reportCount" class="text-lg font-semibold mt-1">1</div>
        </div>
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">平均置信度</div>
          <div id="reportAvgConf" class="text-lg font-semibold mt-1">98</div>
        </div>
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">营养评级</div>
          <div id="reportGrade" class="text-lg font-semibold mt-1">B+</div>
        </div>
      </div>

      <div class="mt-4">
        <div class="text-sm font-semibold text-gray-900">识别明细</div>
        <div id="reportList" class="mt-2 space-y-2">
          <div class="rounded-2xl border border-gray-200 p-3 bg-white">
            <div class="flex items-start justify-between">
              <div>
                <div class="text-sm font-semibold text-gray-900">
                  葡萄
                  <span class="text-xs font-normal text-gray-500">· B+级</span>
                </div>
                <div class="text-xs text-gray-500 mt-1">
                  置信度 98% · 存储 5天
                </div>
                <div class="mt-2">
                  <div class="text-xs text-gray-700 font-medium mb-1">
                    主要营养：
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      class="text-[11px] px-2 py-1 rounded-full bg-gray-50 border border-gray-200"
                      >热量 69kcal</span
                    >

                    <span
                      class="text-[11px] px-2 py-1 rounded-full bg-gray-50 border border-gray-200"
                      >葡萄糖 15g</span
                    >

                    <span
                      class="text-[11px] px-2 py-1 rounded-full bg-gray-50 border border-gray-200"
                      >白藜芦醇 高</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-2">
        <button
          class="rounded-2xl border border-gray-200 px-3 py-3 text-sm bg-gray-50"
          @click="exportBatch()"
        >
          导出报告
        </button>
        <button
          class="rounded-2xl primary-btn text-white px-3 py-3 text-sm font-semibold"
          @click="showToast('已发送（演示）')"
        >
          发送给朋友
        </button>
      </div>

      <div class="mt-3 grid grid-cols-2 gap-2">
        <button
          class="rounded-2xl border border-gray-200 px-3 py-3 text-sm"
          @click="navTo('history')"
        >
          查看历史报告
        </button>
        <button
          class="rounded-2xl primary-btn text-white px-3 py-3 text-sm font-semibold"
          @click="navTo('compare')"
        >
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavTo } from "@/hooks/useNavTo";
import { showToast } from "vant";

const navTo = useNavTo();

function exportBatch() {
  showToast("报告已导出为TXT文件");
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
