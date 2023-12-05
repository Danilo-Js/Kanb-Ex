import { createApp } from "vue";
import App from "./App.vue";
import localforage from "localforage";

localforage.config({
  name: "kanbex",
  storeName: "kanban_tasks",
});

createApp(App).mount("#app");
