<template>
  <van-field
    class="in-picker"
    v-model="fieldValue"
    is-link
    readonly
    label=""
    placeholder="选择品类"
    @click="showPicker = true"
    v-bind="$attrs"
  />
  <van-popup v-model:show="showPicker" destroy-on-close round position="bottom">
    <van-picker
      :model-value="pickerValue"
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from "vue";

const columns = [
  { text: "苹果", value: 1 },
  { text: "香蕉", value: 2 },
  { text: "草莓", value: 3 },
  { text: "橙子", value: 4 },
  { text: "葡萄", value: 5 },
];

const fieldValue = ref("");
const showPicker = ref(false);
const pickerValue = ref<number[]>([]);
const onConfirm = ({ selectedValues, selectedOptions }: any) => {
  showPicker.value = false;
  pickerValue.value = selectedValues;
  fieldValue.value = selectedOptions[0].text;
};
</script>

<style lang="scss" scoped>
.in-picker {
  border: 1px solid var(--color-gray-200);
  border-radius: 16px;
  :deep {
    .van-cell__right-icon {
      transform: rotate(90deg);
    }
  }
}
</style>
