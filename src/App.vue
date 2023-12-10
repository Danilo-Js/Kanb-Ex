<template>
  <div id="app">
    <the-header></the-header>
    <NewTask></NewTask>
    <home-page></home-page>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/shared/TheHeader.vue";
import TheFooter from "./components/shared/TheFooter.vue";
import HomePage from "./views/HomePage.vue";
import NewTask from "./components/kanban/NewTask.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    HomePage,
    TheFooter,
    NewTask,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
}
</style>
