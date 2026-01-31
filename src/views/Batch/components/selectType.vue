<template>
  <van-field
    class="in-picker"
    v-model="fieldValue"
    is-link
    readonly
    label=""
    placeholder="选择类型"
    @click="showPicker = true"
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
  { text: "默认", value: 0 },
  { text: "学习记录", value: 1 },
  { text: "收藏", value: 2 },
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
