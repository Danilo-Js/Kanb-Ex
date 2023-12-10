<template>
  <div class="kanban-board">
    <task-list
      :tasks="activeTasks"
      title="Ativas"
      status="active"
      class="active"
    >
    </task-list>
    <task-list
      :tasks="ongoingTasks"
      title="Em Andamento"
      status="ongoing"
      class="ongoing"
    ></task-list>
    <task-list
      :tasks="completedTasks"
      title="Concluídas"
      status="completed"
      class="completed"
    ></task-list>
  </div>
</template>

<script>
import TaskList from "@/components/kanban/TaskList.vue";

export default {
  name: "HomePage",
  components: {
    TaskList,
  },
  computed: {
    activeTasks() {
      return this.$store.getters.showTasks.filter(
        (task) => task.status === "active"
      );
    },
    ongoingTasks() {
      return this.$store.getters.showTasks.filter(
        (task) => task.status === "ongoing"
      );
    },
    completedTasks() {
      return this.$store.getters.showTasks.filter(
        (task) => task.status === "completed"
      );
    },
  },
};
</script>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: space-around;
}
</style>
