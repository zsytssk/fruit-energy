<template>
  <div class="page">
    <Top class="page-top" />
    <router-view v-slot="{ Component }" class="page-con">
      <transition mode="out-in" name="el-fade-in-linear">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
    <Bottom class="page-bottom" />
  </div>
</template>

<script setup lang="ts">
import Top from "./top.vue";
import Bottom from "./bottom.vue";
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  width: 100vw;
  .page-top {
  }
  .page-con {
    flex: 1;
    overflow: auto;
  }
  .page-bottom {
    border-top: 1px solid #e5e7eb;
    height: 80px;
    background-color: #fff;
    width: 100%;
  }
}
</style>
