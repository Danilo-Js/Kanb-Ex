<template>
  <div class="task-list">
    <h2>{{ title }}</h2>
    <div v-for="task in filteredTasks" :key="task.id">
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
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => task.status === this.status);
    },
  },
};
</script>

<style scoped>
.task-list {
  margin: 20px;
}
</style>
