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
    changeTaskStatus(state, { taskId, newStatus }) {
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.status = newStatus;
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
      commit("setTasks", tasks);
    },
    async addTask({ commit }, task) {
      commit("taskAdded", task);
      const serializedTasks = JSON.stringify(this.state.tasks);
      await localforage.setItem("tasks", serializedTasks);
    },
    changeTaskStatus({ commit }, { taskId, newStatus }) {
      commit("changeTaskStatus", { taskId, newStatus });
      const serializedTasks = JSON.stringify(this.state.tasks);
      localforage.setItem("tasks", serializedTasks);
    },
    async deleteTask({ commit }, taskId) {
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
