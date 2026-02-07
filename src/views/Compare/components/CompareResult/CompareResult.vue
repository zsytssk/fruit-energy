<template>
  <div
    class="rounded-3xl p-4 bg-white border border-gray-100 shadow-soft"
    v-bind="$attrs"
  >
    <div class="flex items-center justify-between">
      <div class="text-sm font-semibold text-gray-900">知识对比结果</div>
      <van-button
        class="border-none text-xs text-gray-500"
        @click="closeCompareResult()"
      >
        收起
      </van-button>
    </div>
    <div class="text-xs text-gray-500">提示：对比营养价值与适宜人群</div>

    <div id="compareTable" class="mt-3 overflow-x-auto">
      <div
        class="rounded-2xl bg-blue-50 border border-blue-100 p-3 text-sm text-blue-900 mb-3"
      >
        <i class="fa-solid fa-star mr-2"></i>
        <b>综合推荐：苹果</b>（综合评分 13.8）
        <div class="text-xs mt-1">
          基于营养评级、营养丰富度、识别置信度综合评估
        </div>
      </div>

      <table
        class="min-w-full text-sm border border-gray-200 rounded-2xl overflow-hidden"
      >
        <thead class="bg-gray-50">
          <tr>
            <th class="p-2 text-left text-xs text-gray-500">对比维度</th>

            <th class="p-2 text-left">
              <div class="font-semibold">苹果</div>
              <div class="text-xs text-gray-500 font-normal mt-0.5">
                A级 · 89%置信
              </div>
            </th>

            <th class="p-2 text-left">
              <div class="font-semibold">苹果</div>
              <div class="text-xs text-gray-500 font-normal mt-0.5">
                A级 · 88%置信
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-t border-gray-200">
            <td class="p-2 text-xs text-gray-500 whitespace-nowrap align-top">
              营养评级
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">A</div>
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">A</div>
            </td>
          </tr>

          <tr class="bg-gray-50 border-t border-gray-200">
            <td class="p-2 text-xs text-gray-500 whitespace-nowrap align-top">
              建议存储
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">7天</div>
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">7天</div>
            </td>
          </tr>

          <tr class="bg-white border-t border-gray-200">
            <td class="p-2 text-xs text-gray-500 whitespace-nowrap align-top">
              主要营养
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">热量52kcal、膳食纤维2.4g</div>
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">热量52kcal、膳食纤维2.4g</div>
            </td>
          </tr>

          <tr class="bg-gray-50 border-t border-gray-200">
            <td class="p-2 text-xs text-gray-500 whitespace-nowrap align-top">
              适宜人群
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">减重人群（低热量）、便秘者（高纤维）</div>
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">减重人群（低热量）、便秘者（高纤维）</div>
            </td>
          </tr>

          <tr class="bg-white border-t border-gray-200">
            <td class="p-2 text-xs text-gray-500 whitespace-nowrap align-top">
              挑选要点
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">选择颜色均匀、有自然光泽的</div>
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">选择颜色均匀、有自然光泽的</div>
            </td>
          </tr>

          <tr class="bg-gray-50 border-t border-gray-200">
            <td class="p-2 text-xs text-gray-500 whitespace-nowrap align-top">
              注意禁忌
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">胃酸过多者宜饭后吃</div>
            </td>

            <td class="p-2 align-top">
              <div class="text-sm">胃酸过多者宜饭后吃</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-3 flex gap-2">
      <button
        class="flex-1 rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
        @click="exportCompareAsText()"
      >
        导出结论
      </button>
      <button
        class="flex-1 rounded-2xl primary-btn text-white px-3 py-2 text-sm"
        @click="showToast('已生成分享链接（演示）')"
      >
        分享知识
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { copyText } from "@/utils/utils";
import { showToast } from "vant";

const emit = defineEmits(["hide"]);
const exportCompareAsText = () => {
  copyText(
    "【水果知识对比报告】 生成时间：2026/2/7 11:06:39 ============================== 【苹果】 营养评级：A | 置信度：89% | 建议存储：7天 主要营养：热量52kcal、膳食纤维2.4g、维生素C4mg、钾119mg 适宜人群：减重人群（低热量）、便秘者（高纤维）、高血压患者（含钾）、一般人群皆宜 挑选要点：选择颜色均匀、有自然光泽的；轻按感觉坚实，不过软也不过硬 注意禁忌：胃酸过多者宜饭后吃；糖尿病患者注意分量；对苹果过敏者避免 【苹果】 营养评级：A | 置信度：88% | 建议存储：7天 主要营养：热量52kcal、膳食纤维2.4g、维生素C4mg、钾119mg 适宜人群：减重人群（低热量）、便秘者（高纤维）、高血压患者（含钾）、一般人群皆宜 挑选要点：选择颜色均匀、有自然光泽的；轻按感觉坚实，不过软也不过硬 注意禁忌：胃酸过多者宜饭后吃；糖尿病患者注意分量；对苹果过敏者避免 ============================== 注：本报告基于知识库生成，仅供参考学习。",
  );
};
const closeCompareResult = () => {
  emit("hide");
};
</script>
<style lang="scss" scoped></style>
