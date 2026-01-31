<template>
  <div class="page-bottom">
    <button :class="{ cur: curPageType == 'home' }" @click="gotoPage('home')">
      <i class="fa-solid fa-camera"></i><span>扫一扫</span>
    </button>
    <button
      :class="{ cur: curPageType == 'compare' }"
      @click="gotoPage('compare')"
    >
      <i class="fa-solid fa-scale-balanced"></i><span>对比</span>
    </button>
    <button :class="{ cur: curPageType == 'user' }" @click="gotoPage('user')">
      <i class="fa-solid fa-user"></i><span>我的</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePageType } from "@/hooks/usePageType";
import { useRouter } from "vue-router";

const router = useRouter();
const curPageType = usePageType();

const gotoPage = (page: string) => {
  router.push("/" + page);
};
</script>

<style lang="scss" scoped>
.page-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(156, 163, 175);
    cursor: pointer;
    &.cur {
      color: rgb(38, 166, 154);
    }
    i {
      font-size: 20px;
      margin-bottom: 4px;
    }
  }
}
</style>
