<template>
  <div>
    <div class="camera">
      <video id="video" ref="videoRef">Video stream not available.</video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showToast } from "vant";
import { onUnmounted, ref } from "vue";

type FacingMode = { ideal: "environment" } | "user";
const cameraStream = ref<MediaStream>();
const flashEnabled = ref(false);
const videoRef = ref<HTMLVideoElement>();
const curFacingMode = ref<FacingMode>();
const openCamera = (facingMode: FacingMode = { ideal: "environment" }) => {
  stopCamera();
  curFacingMode.value = facingMode;
  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode, // 后置摄像头
      },
      audio: false,
    })
    .then((stream) => {
      if (!videoRef.value) {
        return;
      }
      cameraStream.value = stream;
      videoRef.value.srcObject = stream;
      videoRef.value.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });
};

const takePicture = () => {
  if (!videoRef.value) {
    return;
  }
  const width = videoRef.value.videoWidth || 0;
  const height = videoRef.value.videoHeight || 0;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.drawImage(videoRef.value, 0, 0, width, height);
  const dataURL = canvas.toDataURL("image/jpeg", 0.7);
  return dataURL;
  //   const link = document.createElement("a");
  //   link.href = dataURL;
  //   link.download = `test.jpg`;
  //   link.click();
  //   URL.revokeObjectURL(link.href);
};

const getCameras = async () => {
  const cameras = await getCameraList();
  console.log(`test:>cameras`, cameras);
};

async function getCameraList() {
  try {
    // 1. 检查浏览器兼容性
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return [];
    }

    await navigator.mediaDevices.getUserMedia({ video: true });
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    // 5. 格式化返回数据（便于使用）
    return cameras.map((camera) => ({
      deviceId: camera.deviceId, // 设备唯一ID（可用于指定摄像头采集）
      label: camera.label || `摄像头 ${cameras.indexOf(camera) + 1}`, // 设备名（无权限时显示默认名）
      kind: camera.kind, // 固定为 "videoinput"
    }));
  } catch (err) {
    // 处理权限拒绝/设备无摄像头等异常
    if ((err as any).name === "NotAllowedError") {
      console.error("用户拒绝了摄像头权限，无法获取摄像头列表");
    } else if ((err as any).name === "NotFoundError") {
      console.error("当前设备未检测到摄像头");
    } else {
      console.error("获取摄像头列表失败：", (err as any).message);
    }
    return [];
  }
}

// 控制闪光灯开关
async function toggleFlash() {
  // 先初始化相机
  if (!cameraStream.value) return;

  try {
    // 创建 ImageCapture 实例来控制闪光灯
    const track = cameraStream.value.getVideoTracks()[0];

    // 检查设备是否支持闪光灯
    if (!(track.getCapabilities() as any).torch) {
      showToast("你的设备没有闪光灯或不支持控制");
      return;
    }

    // 切换闪光灯状态
    flashEnabled.value = !flashEnabled.value;
    await track.applyConstraints({
      advanced: [{ torch: flashEnabled } as any], // torch 模式即闪光灯常亮
    });

    // 反馈状态
    showToast(flashEnabled.value ? "闪光灯已打开" : "闪光灯已关闭");
  } catch (error) {
    console.error("控制闪光灯失败：", error);
    showToast("无法控制闪光灯，请检查设备权限");
  }
}

function toggleCameraFacingMode() {
  if (!cameraStream.value) {
    return;
  }
  if (curFacingMode.value == "user") {
    openCamera();
  } else {
    openCamera("user");
  }
}

function stopCamera() {
  if (cameraStream.value) {
    cameraStream.value.getTracks().forEach((track) => track.stop());
    cameraStream.value = undefined;
    curFacingMode.value = undefined;
  }
}

onUnmounted(() => {
  stopCamera();
});

defineExpose({
  openCamera,
  toggleCameraFacingMode,
  takePicture,
  getCameras,
  toggleFlash,
});
</script>

<style lang="scss" scoped>
.camera {
  width: 100%;
  display: flex;
  flex-direction: column;
  #video {
    width: 100%;
    height: 380px;
  }
  .btn-box {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
}
</style>
