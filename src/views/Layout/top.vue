<template>
  <div v-bind="$attrs" class="top-panel px-4"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.top-panel {
  height: 56px;
  background: linear-gradient(135deg, var(--teal) 0%, var(--mint) 100%);
}
</style>
