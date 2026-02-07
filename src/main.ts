import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router"; // 导入路由
import { initDom } from "./utils/positionToCode";
import Vant from "vant";
import "vant/lib/index.css";
import "./utils/calcRem";

import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "./style.css";
import { createPinia } from "pinia";

initDom();
createApp(App).use(router).use(createPinia()).use(Vant).mount("#app");
