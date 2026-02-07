<template>
  <div class="page">
    <div class="rounded-3xl p-4 bg-white border border-gray-100 shadow-soft">
      <div class="flex items-start justify-between">
        <div>
          <div class="text-base font-semibold text-gray-900">
            <span>{{ fruitInfo?.name }}</span
            >知识卡
          </div>
          <div class="text-xs text-gray-500 mt-1" id="resMeta">
            扫一扫识别 · {{ formateDate(fruitInfo?.time!) }}
          </div>
        </div>
        <!-- 已移除右侧的"知识卡"小卡片 -->
      </div>

      <div class="mt-4 grid grid-cols-3 gap-2">
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">识别置信度</div>
          <div class="text-xl font-semibold text-gray-900 mt-1">
            <span id="resConf">{{ fruitInfo?.reliability }}</span
            ><span class="text-sm text-gray-500">%</span>
          </div>
        </div>
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">营养评级</div>
          <div class="text-xl font-semibold text-gray-900 mt-1" id="resGrade">
            {{ fruitInfo?.grade }}
          </div>
        </div>
        <div class="rounded-2xl bg-gray-50 border border-gray-100 p-3">
          <div class="text-xs text-gray-500">建议存储</div>
          <div class="text-xl font-semibold text-gray-900 mt-1">
            <span id="resStoreDays">{{ fruitInfo?.storageDays }}</span
            ><span class="text-sm text-gray-500">天</span>
          </div>
        </div>
      </div>

      <!-- 营养信息 -->
      <div class="mt-4 knowledge-card p-3">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-apple-whole text-blue-600"></i>
          <div class="text-sm font-semibold text-gray-900">
            营养价值（每100g）
          </div>
        </div>
        <div id="resNutrition" class="flex flex-wrap gap-2">
          <div
            v-for="item in fruitInfo?.nutrition"
            :key="item.label"
            class="bg-teal-50 border-teal-100 px-3 py-2 rounded-xl text-xs font-medium"
          >
            <div class="font-semibold">{{ item.label }}</div>
            <div class="text-gray-700 mt-0.5">{{ item.value }}</div>
          </div>
        </div>
      </div>

      <!-- 挑选技巧 -->
      <div class="mt-4 knowledge-card p-3" style="border-left-color: #10b981">
        <div class="flex items-center gap-2 mb-2">
          <i class="fa-solid fa-magnifying-glass text-emerald-600"></i>
          <div class="text-sm font-semibold text-gray-900">挑选技巧</div>
        </div>
        <div id="resPickTips" class="text-sm text-gray-700 space-y-1">
          <div
            v-for="item in fruitInfo?.pickTips"
            :key="item"
            class="flex items-start"
          >
            <i
              class="fa-solid fa-circle-check text-emerald-500 mt-0.5 mr-2 text-xs"
            ></i>
            <div>{{ item }}</div>
          </div>
        </div>
      </div>

      <!-- 适宜与禁忌 -->
      <div class="mt-4 grid grid-cols-2 gap-3">
        <div class="knowledge-card p-3" style="border-left-color: #84cc16">
          <div class="flex items-center gap-2 mb-2">
            <i class="fa-solid fa-thumbs-up text-lime-600"></i>
            <div class="text-sm font-semibold text-gray-900">适宜人群</div>
          </div>
          <div id="resSuitableFor" class="text-sm text-gray-700">
            <div
              v-for="item in fruitInfo?.suitableFor"
              :key="item"
              class="flex items-center mb-1"
            >
              <i class="fa-solid fa-check text-lime-600 mr-2 text-xs"></i>
              <div class="text-xs">{{ item }}</div>
            </div>
          </div>
        </div>
        <div class="knowledge-card p-3" style="border-left-color: #f59e0b">
          <div class="flex items-center gap-2 mb-2">
            <i class="fa-solid fa-triangle-exclamation text-amber-600"></i>
            <div class="text-sm font-semibold text-gray-900">注意禁忌</div>
          </div>
          <div id="resAvoidFor" class="text-sm text-gray-700">
            <div
              v-for="item in fruitInfo?.avoidFor"
              :key="item"
              class="flex items-center mb-1"
            >
              <i
                class="fa-solid fa-exclamation text-amber-600 mr-2 text-xs"
              ></i>
              <div class="text-xs">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 保存与分享 -->
      <div class="mt-4 grid grid-cols-2 gap-2">
        <button
          class="rounded-2xl border border-gray-200 px-3 py-3 text-sm bg-gray-50"
          @click="showToast('知识卡已保存')"
        >
          保存知识卡
        </button>
        <button
          class="rounded-2xl primary-btn text-white px-3 py-3 text-sm font-semibold"
          @click="toCompare"
        >
          去对比
        </button>
        <button
          class="col-span-2 rounded-2xl accent-btn text-white px-3 py-3 text-sm font-semibold"
          @click="navTo('home')"
        >
          再识一个
        </button>
      </div>

      <!-- 已移除底部提示文字 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { FRUIT_KNOWLEDGE_DB } from "@/config/fruitDb";
import { useNavTo } from "@/hooks/useNavTo";
import { useCompareListStore } from "@/store/compareList";
import { useScanListStore } from "@/store/scanList";
import { formateDate, genRandomString, getRandomNumber } from "@/utils/utils";
import { showToast } from "vant";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const navTo = useNavTo();
const route = useRoute();
const fruitInfo = ref<FruitItem>();
const { addItem } = useCompareListStore();
const { addItem: addScanItem } = useScanListStore();
onMounted(() => {
  const scanType = route.query?.scanType as keyof typeof FRUIT_KNOWLEDGE_DB;
  const scanTime = route.query?.scanTime as string;
  const item = FRUIT_KNOWLEDGE_DB[scanType];
  fruitInfo.value = {
    ...item,
    id: genRandomString(),
    name: scanType,
    level: item.grade + `级`,
    reliability: getRandomNumber(80, 100),
    time: Number(scanTime),
  } as FruitItem;

  addScanItem({ ...fruitInfo.value });
});

const toCompare = () => {
  if (!fruitInfo.value) {
    return;
  }
  addItem(fruitInfo.value);
  navTo("compare");
};
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
.knowledge-card {
  border-left: 4px solid var(--teal);
  background: rgba(255, 255, 255, 0.88);
}
</style>
