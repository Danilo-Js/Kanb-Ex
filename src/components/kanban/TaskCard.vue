<template>
  <div class="task-card">
    <button v-if="task.status !== 'completed'" @click="changeTaskStatus(task)">
      {{ task.status === "active" ? "Iniciar" : "Concluir" }}
    </button>
    <button @click="deleteTask(task.id)">Excluir</button>
    <p><strong>Nome: </strong> {{ task.name }}</p>
    <p><strong>Responsável: </strong> {{ task.responsible }}</p>
    <p><strong>Descrição: </strong> {{ task.description }}</p>
    <p><strong>Prazo: </strong> {{ task.deadline }}</p>
    <p><strong>Tempo Estimado: </strong> {{ task.estimatedTime }}</p>
    <p><strong>Status: </strong> {{ formatStatus(task.status) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  emits: ["complete", "delete"],
  methods: {
    changeTaskStatus(task) {
      const newStatus = task.status === "active" ? "ongoing" : "completed";
      this.$emit("changeStatus", { taskId: task.id, newStatus });
    },
    deleteTask(taskId) {
      this.$emit("delete", taskId);
    },
    formatStatus(status) {
      const statusText = {
        active: "Ativa",
        ongoing: "Em Andamento",
        completed: "Concluída",
      };
      return statusText[status] || status;
    },
  },
  computed: {
    tasks1() {
      return this.$store.getters.returnTaskByStatus(status.status);
    },
    tasks2() {
      return this.$store.getters.showTasks;
    },
  },
};
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 150%;

  background-color: rgb(185, 180, 180);
}

.task-card button {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
  color: #333;
}

.task-card button:hover {
  opacity: 0.9;
}

.task-card button:last-child {
  margin-right: 0;
}
</style>
