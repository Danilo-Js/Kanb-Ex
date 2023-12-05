<template>
  <div class="task-list">
    <h2>{{ title }}</h2>
    <div v-for="task in tasks" :key="task.id">
      <task-card :task="task" />
    </div>
  </div>
</template>

<script>
import TaskCard from "./TaskCard.vue";

export default {
  name: "TaskList",
  components: {
    TaskCard,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  // Métodos para manipulação do TaskList ficarão aqui
};
</script>

<style scoped>
.task-list {
  margin: 20px;
}
</style>
