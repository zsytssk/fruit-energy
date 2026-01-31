<template>
  <div class="page">
    <div class="rounded-3xl p-4 bg-white border border-gray-100 shadow-lg/5">
      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 rounded-2xl btn-blue flex items-center justify-center"
        >
          <i class="fa-solid fa-user text-white"></i>
        </div>
        <div class="flex-1">
          <div class="text-base font-semibold text-gray-900">水果知识助手</div>
          <div class="text-xs text-gray-500 mt-1">专注水果知识学习</div>
        </div>
        <van-button
          class="text-xs text-blue-600"
          @click="showToast('已进入编辑（演示）')"
        >
          编辑
        </van-button>
      </div>

      <div class="grid grid-cols-3 gap-2 mt-4">
        <button
          class="rounded-2xl border border-gray-200 p-3 text-left bg-gray-50"
          @click="navTo('history')"
        >
          <div class="text-xs text-gray-500">批量报告</div>
          <div id="mineBatches" class="text-lg font-semibold mt-1">0</div>
        </button>
        <button
          class="rounded-2xl border border-gray-200 p-3 text-left bg-gray-50"
          @click="navTo('store')"
        >
          <div class="text-xs text-gray-500">识别记录</div>
          <div id="mineScans" class="text-lg font-semibold mt-1">0</div>
        </button>
        <button
          class="rounded-2xl border border-gray-200 p-3 text-left bg-gray-50"
          @click="showToast('已生成凭证（演示）')"
        >
          <div class="text-xs text-gray-500">学习进度</div>
          <div class="text-lg font-semibold mt-1">12种</div>
        </button>
      </div>
    </div>
    <div
      class="mt-4 rounded-3xl p-4 bg-white border border-gray-100 shadow-soft"
    >
      <div class="text-sm font-semibold text-gray-900">偏好设置</div>

      <div class="mt-3 space-y-3">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-900">详细模式</div>
            <div class="text-xs text-gray-500">显示更多营养细节</div>
          </div>
          <label class="inline-flex items-center cursor-pointer">
            <van-switch v-model="config.showDetail" size="22px" />
          </label>
        </div>

        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-900">自动保存记录</div>
            <div class="text-xs text-gray-500">每次识别后自动保存</div>
          </div>
          <label class="inline-flex items-center cursor-pointer">
            <van-switch v-model="config.autoSave" size="22px" />
          </label>
        </div>

        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-900">显示健康提示</div>
            <div class="text-xs text-gray-500">展示适宜与禁忌人群</div>
          </div>
          <label class="inline-flex items-center cursor-pointer">
            <van-switch v-model="config.showHealthTip" size="22px" />
          </label>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-2">
        <button
          class="rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
          @click="showToast('数据已复制到剪贴板（演示）')"
        >
          导出数据
        </button>
        <button
          class="rounded-2xl btn-blue text-white px-3 py-2 text-sm"
          @click="showToast('已提交反馈（演示）')"
        >
          意见反馈
        </button>
      </div>
    </div>
    <div
      class="mt-4 rounded-3xl p-4 bg-white border border-gray-100 shadow-soft"
    >
      <div class="text-sm font-semibold text-gray-900">关于</div>
      <div class="text-xs text-gray-500 mt-2 leading-5">
        这是可视化交互原型：用于展示"水果识别 + 知识查询 + 对比学习"的闭环。
        <br />本页面提供水果知识参考，非实际检测工具。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavTo } from "@/hooks/useNavTo";
import { showToast } from "vant";
import { ref } from "vue";

const navTo = useNavTo();
const config = ref<any>({});
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
