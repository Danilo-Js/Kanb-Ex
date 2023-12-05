<template>
  <div class="home">
    <the-header></the-header>
    <div class="kanban-board">
      <task-list :tasks="activeTasks" title="Ativas"></task-list>
      <task-list :tasks="ongoingTasks" title="Em Andamento"></task-list>
      <task-list :tasks="completedTasks" title="Concluídas"></task-list>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import TaskList from "@/components/kanban/TaskList.vue";

export default {
  name: "HomePage",
  components: {
    TheHeader,
    TheFooter,
    TaskList,
  },
  data() {
    return {
      activeTasks: [],
      ongoingTasks: [],
      completedTasks: [],
    };
  },
};
</script>

<style scoped>
.home {
  /* Estilos para a HomePage */
}
.kanban-board {
  display: flex;
  justify-content: space-around;
  /* Estilos para o quadro Kanban */
}
</style>
