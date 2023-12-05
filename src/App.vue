<template>
  <div id="app">
    <the-header></the-header>
    <home-page></home-page>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/shared/TheHeader.vue";
import TheFooter from "./components/shared/TheFooter.vue";
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    HomePage,
    TheFooter,
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
