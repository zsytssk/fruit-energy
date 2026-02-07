import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import User from "@/views/User/User.vue";
import Store from "@/views/Store/Store.vue";
import Batch from "@/views/Batch/Batch.vue";
import BatchReport from "@/views/BatchReport/BatchReport.vue";
import Compare from "@/views/Compare/Compare.vue";
import History from "@/views/History/History.vue";
import FruitInfo from "@/views/FruitInfo/FruitInfo.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/compare", name: "compare", component: Compare },
  { path: "/user", name: "user", component: User },
  { path: "/store", name: "store", component: Store },
  { path: "/batch", name: "batch", component: Batch },
  { path: "/batchReport", name: "batchReport", component: BatchReport },
  { path: "/history", name: "history", component: History },
  { path: "/fruitInfo", name: "fruitInfo", component: FruitInfo },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
