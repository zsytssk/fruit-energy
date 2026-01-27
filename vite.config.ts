import { type ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import WaPosition from "./script/waPosition";
import WaPositionServer from "./script/waPositionServer";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 路径别名
      },
    },
    plugins: [
      env.VITE_POSITION === "open" && WaPositionServer(),
      env.VITE_POSITION === "open" && WaPosition(),
      vue(),
      tailwindcss(),
    ],
  };
};
