<template>
  <div class="empty-record">
    <div class="empty-title">还没有识别记录</div>
    <div class="empty-intro text-xs px-4">去"扫一扫"保存几条记录</div>
    <button class="btn-red" @click="navTo('/home')">去扫一扫</button>
  </div>
</template>

<script setup lang="ts">
import { useNavTo } from "@/hooks/useNavTo";
const navTo = useNavTo();
</script>

<style lang="scss" scoped>
.empty-record {
  background-color: rgb(249 250 251);
  border: 1px solid rgb(243 244 246);
  padding: 16px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  .empty-title {
    font-size: 14px;
    color: rgb(17 24 39);
    font-weight: bold;
  }
  .empty-intro {
    color: rgb(107 114 128 / var(--tw-text-opacity, 1));
    // font-size: 12px;
  }
  .btn-red {
    padding: 12px 16px;
    margin-top: 12px;
  }
}
</style>
