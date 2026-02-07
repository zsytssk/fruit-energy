<template>
  <div class="page">
    <div class="rounded-3xl p-4 btn-blue text-white shadow-lg/5">
      <div class="flex items-start justify-between">
        <div>
          <div class="text-lg font-semibold">识别记录</div>
        </div>
        <div
          class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center"
        >
          <i class="fa-solid fa-history"></i>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2 mt-4">
        <div class="rounded-2xl bg-white/15 border border-white/25 p-3">
          <div class="text-xs opacity-90">今日识别</div>
          <div id="kpiTodayScans2" class="text-lg font-semibold mt-1">
            {{ scanList.length }}
          </div>
        </div>
        <div class="rounded-2xl bg-white/15 border border-white/25 p-3">
          <div class="text-xs opacity-90">已保存</div>
          <div id="kpiSaved2" class="text-lg font-semibold mt-1">0</div>
        </div>
        <div class="rounded-2xl bg-white/15 border border-white/25 p-3">
          <div class="text-xs opacity-90">汇总报告</div>
          <div id="kpiBatches2" class="text-lg font-semibold mt-1">0</div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-1">
      <div class="text-sm font-semibold text-gray-900">最近识别</div>
      <van-button plain class="text-xs text-blue-600" @click="scanStore.clear">
        清空全部
      </van-button>
    </div>
    <scan-list v-if="scanList.length" />
    <empty-record v-else />
  </div>
</template>

<script setup lang="ts">
import EmptyRecord from "@/components/EmptyRecord/EmptyRecord.vue";
import ScanList from "@/components/ScanList/ScanList.vue";
import { useNavTo } from "@/hooks/useNavTo";
import { useScanListStore } from "@/store/scanList";
import { storeToRefs } from "pinia";
import { showToast } from "vant";
import { ref } from "vue";

const scanStore = useScanListStore();

const { list: scanList } = storeToRefs(scanStore);
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
