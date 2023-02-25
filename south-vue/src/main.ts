import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Book from "./pages/Book.vue";
import Saved from "./pages/Saved.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/book/:id", component: Book },
  { path: "/saved", component: Saved },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
