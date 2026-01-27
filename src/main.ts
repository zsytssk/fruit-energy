import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router"; // 导入路由

import { initDom } from "./utils/positionToCode";
initDom();
createApp(App).use(router).mount("#app");
