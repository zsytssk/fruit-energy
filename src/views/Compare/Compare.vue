<template>
  <div class="page">
    <div class="diff-panel shadow-lg/5">
      <div class="flex items-center justify-between">
        <span class="font-semibold text-gray-900">知识对比</span>
        <van-button plain class="text-xs" @click="onClear">
          <span class="text-blue-600">清空</span>
        </van-button>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-gray-500">已选 <span>1</span> / 3</span>
        <button>开始对比</button>
        <van-button
          class="btn-red btn-small"
          :disabled="selectNum < 2"
          @click="compareItems"
        >
          开始对比
        </van-button>
      </div>
      <div class="compareList">
        <CompareList class="mt-2" v-if="list.length" />
        <EmptyRecord class="mt-2" v-else />
      </div>
    </div>
    <CompareResult
      v-if="showResult"
      class="mt-4 diff-panel"
      @hide="showResult = false"
    />
    <div class="diff-panel static-panel shadow-lg/5 mt-4">
      <div class="flex in-top">
        <button
          class="btn-red flex items-center justify-between flex-[1]"
          @click="navTo('home')"
        >
          <span class="font-semibold">扫一扫</span>
          <i class="fa-solid fa-camera text-white/90"></i>
        </button>
        <button
          class="btn-blue flex items-center justify-between flex-[1]"
          @click="navTo('batch')"
        >
          <span class="font-semibold">批量识别</span>
          <i class="fa-solid fa-layer-group text-white/90"></i>
        </button>
      </div>
      <div class="in-bottom grid grid-cols-3 gap-[8px] mt-4">
        <button
          class="rounded-2xl bg-gray-50 border border-gray-200 p-[12px]"
          @click="navTo('store')"
        >
          <div class="text-xs text-gray-500">今日识别</div>
          <div id="kpiTodayScans" class="text-lg font-semibold mt-1">
            {{ scanList.length }}
          </div>
        </button>
        <button
          class="rounded-2xl bg-gray-50 border border-gray-200 p-[12px]"
          @click="navTo('user')"
        >
          <div class="text-xs text-gray-500">已保存</div>
          <div id="kpiSaved" class="text-lg font-semibold mt-1">0</div>
        </button>
        <button
          class="rounded-2xl bg-gray-50 border border-gray-200 p-[12px]"
          @click="navTo('statics')"
        >
          <div class="text-xs text-gray-500">汇总报告</div>
          <div id="kpiBatches" class="text-lg font-semibold mt-1">0</div>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between mt-1">
      <div class="text-sm font-semibold text-gray-900">最近识别</div>
      <van-button plain class="text-xs text-blue-600" @click="navTo('store')">
        查看全部
      </van-button>
    </div>
    <ScanList v-if="scanList.length" />
    <div class="diff-panel p-4" v-else>
      <div class="text-sm font-semibold text-gray-900">暂无识别记录</div>
      <div class="text-xs text-gray-500 mt-[4px]">使用"扫一扫"开始学习</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompareResult from "./components/CompareResult/CompareResult.vue";
import EmptyRecord from "@/components/EmptyRecord/EmptyRecord.vue";
import { useNavTo } from "@/hooks/useNavTo";
import { useCompareListStore } from "@/store/compareList";
import { showToast } from "vant";
import { ref } from "vue";
import CompareList from "./components/CompareList/CompareList.vue";
import { storeToRefs } from "pinia";
import { useScanListStore } from "@/store/scanList";
import ScanList from "@/components/ScanList/ScanList.vue";

const navTo = useNavTo();
const showResult = ref(false);
const store = useCompareListStore();
const { list: scanList } = useScanListStore();
const { list, selectNum } = storeToRefs(store);

const onClear = () => {
  showToast("已清空所有记录");
  store.clear();
};
const compareItems = () => {
  showResult.value = true;
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
  :deep {
    .diff-panel {
      background-color: #fff;
      border: 1px solid rgb(243 244 246);
      padding: 16px;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
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
