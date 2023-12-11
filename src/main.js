import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import localforage from "localforage";

const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    async taskAdded(state, payload) {
      state.tasks.push({
        id: payload.id,
        name: payload.name,
        description: payload.description,
        responsible: payload.responsible,
        deadline: payload.deadline,
        estimatedTime: payload.estimatedTime,
        status: payload.status,
      });
    },
    completeTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.status = "completed";
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    async loadTasks({ commit }) {
      const serializedTasks = (await localforage.getItem("tasks")) || "[]";
      const tasks = JSON.parse(serializedTasks);
      console.log("Loaded tasks from localforage:", tasks);
      commit("setTasks", tasks);
    },
    async addTask({ commit }, task) {
      console.log("Adding task in store:", task);
      commit("taskAdded", task);
      const serializedTasks = JSON.stringify(this.state.tasks);
      await localforage.setItem("tasks", serializedTasks);
    },
    async completeTask({ commit }, taskId) {
      commit("completeTask", taskId);
      const serializedTasks = JSON.stringify(this.state.tasks);
      await localforage.setItem("tasks", serializedTasks);
    },
    async deleteTask({ commit }, taskId) {
      console.log("Deleting task in store with ID:", taskId);
      commit("deleteTask", taskId);
      const serializedTasks = JSON.stringify(this.state.tasks);
      await localforage.setItem("tasks", serializedTasks);
    },
  },
  getters: {
    showTasks(state) {
      return state.tasks;
    },
    returnTaskByStatus: (state) => (status) => {
      return state.tasks.find((task) => task.status === status);
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
store.dispatch("loadTasks");
