<template>
  <div class="pageHome">
    <Camera ref="cameraRef" />
    <div
      class="bottom-controls absolute bottom-0 left-0 right-0 rounded-t-3xl px-6 py-6"
    >
      <!-- 主要控制按钮 -->
      <div class="flex items-center justify-between mb-6">
        <button
          class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
          @click="toggleFlash()"
        >
          <i id="flashIcon" class="fa-solid fa-bolt text-white text-lg"></i>
        </button>

        <div class="flex flex-col items-center">
          <!-- 圆形快门按钮 -->
          <button
            class="shutter-button rounded-full mb-2 flex items-center justify-center"
            @click="simulateShot()"
          >
            <div class="shutter-button-inner" style="transform: scale(1)"></div>
          </button>
          <div class="text-white text-xs opacity-70 mb-4">轻点拍照</div>

          <!-- 模式切换 -->
          <div class="flex justify-center gap-3 mb-4">
            <button
              class="mode-pill px-4 py-2 rounded-full text-white text-sm flex items-center gap-2"
              @click="openPhotoLibrary()"
            >
              <i class="fa-solid fa-images"></i>
              <span>相册</span>
            </button>
            <button
              class="mode-pill px-4 py-2 rounded-full text-white text-sm flex items-center gap-2 bg-white/30"
            >
              <i class="fa-solid fa-camera"></i>
              <span>扫描食物</span>
            </button>
            <button
              class="mode-pill px-4 py-2 rounded-full text-white text-sm flex items-center gap-2"
              @click="toggleMode('barcode')"
            >
              <i class="fa-solid fa-barcode"></i>
              <span>条形码</span>
            </button>
          </div>
        </div>

        <button
          class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
          @click="toggleCameraFacingMode()"
        >
          <i class="fa-solid fa-rotate text-white text-lg"></i>
        </button>
      </div>

      <!-- 水果选择 -->
      <div class="px-4">
        <div class="text-white text-xs mb-2 opacity-70">选择水果类型</div>
        <SelectFruitType class="select-fruit" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Camera from "@/components/Camera/Camera.vue";
import { useNavTo } from "@/hooks/useNavTo";
import { showToast } from "vant";
import { onMounted, ref } from "vue";
import SelectFruitType from "../Batch/components/selectFruitType.vue";

const cameraRef = ref<InstanceType<typeof Camera>>();
const navTo = useNavTo();
const toggleFlash = () => {
  cameraRef.value?.toggleFlash();
};
const simulateShot = async () => {
  await cameraRef.value?.takePicture();
  navTo(`fruitInfo?scanType=苹果&scanTime=${Date.now()}`);
};
const openPhotoLibrary = () => {
  showToast("已打开相册（演示）");
};
const toggleMode = (type: string) => {
  showToast("切换到条形码扫描模式");
};
const toggleCameraFacingMode = () => {
  showToast("切换为后置摄像头");
  cameraRef.value?.toggleCameraFacingMode();
};

onMounted(() => {
  cameraRef.value?.openCamera();
});
</script>

<style lang="scss" scoped>
.pageHome {
  height: 100%;
  background-color: #000;
  position: relative;
  .shutter-button {
    width: 80px;
    height: 80px;
    border: 4px solid rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.1);
  }
  .shutter-button-inner {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: white;
    transition: transform 0.1s;
  }
  .mode-pill {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    cursor: pointer;
  }
  :deep {
    .select-fruit {
      background-color: transparent;
      .van-field__control {
        color: #fff;
      }
    }
  }
}
</style>
