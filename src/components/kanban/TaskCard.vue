<template>
  <div class="task-card">
    <button @click="completeTask(task.id)">Completar</button>
    <button @click="deleteTask(task.id)">Excluir</button>
    <p><strong>Nome: </strong> {{ task.name }}</p>
    <p><strong>Responsável: </strong> {{ task.responsible }}</p>
    <p><strong>Descrição: </strong> {{ task.description }}</p>
    <p><strong>Prazo: </strong> {{ task.deadline }}</p>
    <p><strong>Tempo Estimado: </strong> {{ task.estimatedTime }}</p>
    <p><strong>Status: </strong> {{ task.status }}</p>
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
    completeTask(taskId) {
      this.$emit("complete", taskId);
    },
    deleteTask(taskId) {
      console.log("Deleting task with ID:", taskId);
      this.$emit("delete", taskId);
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

.ongoing {
  background-color: rgb(247, 131, 131);
}

.completed {
  background-color: rgb(90, 202, 90);
}
</style>
