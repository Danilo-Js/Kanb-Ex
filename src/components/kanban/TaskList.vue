<template>
  <div class="task-list">
    <h2>{{ title }}</h2>
    <div v-for="task in filteredTasks" :key="task.id">
      <task-card
        :task="task"
        @complete="handleComplete"
        @delete="handleDelete"
      />
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
  methods: {
    handleComplete(taskId) {
      this.$store.dispatch("completeTask", taskId);
    },
    handleDelete(taskId) {
      console.log("Handle delete for task ID:", taskId);
      this.$store.dispatch("deleteTask", taskId);
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
