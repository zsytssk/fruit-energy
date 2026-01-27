import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Record from "@/views/Record/Record.vue";
import User from "@/views/User/User.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/record", component: Record },
  { path: "/user", component: User },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
