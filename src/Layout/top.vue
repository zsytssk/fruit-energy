<template>
  <div v-bind="$attrs" class="top-panel">
    <van-button class="top-button" @click="router.back()">
      <i class="fa-solid fa-arrow-left text-white"></i>
    </van-button>
    <div>
      <div class="top-title">{{ pageInfo?.title }}</div>
      <div class="top-intro">{{ pageInfo?.intro }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageIntro } from "@/config/pageIntro";
import { usePageType } from "@/hooks/usePageType";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const curPageType = usePageType();
const pageInfo = computed(() => {
  console.log(`test:>`, curPageType.value);
  return PageIntro[curPageType.value as keyof typeof PageIntro];
});
</script>

<style lang="scss" scoped>
.top-panel {
  width: 100vw;
  height: 56px;
  background: linear-gradient(135deg, var(--teal) 0%, var(--mint) 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 12px;
}
.top-button {
  border-radius: 100%;
  width: 36px;
  height: 36px;
  border: 1px solid rgb(255 255 255 / 0.3);
  background-color: rgb(255 255 255 / 0.2);
  cursor: pointer;
}
.top-title {
  font-size: 16px;
  color: white;
  font-weight: bold;
}
.top-intro {
  font-size: 12px;
  color: rgb(255 255 255 / 0.8);
}
</style>
