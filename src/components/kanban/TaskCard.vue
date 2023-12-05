<template>
  <div class="task-card">
    <h3>{{ task.name }}</h3>
    <p><strong>Responsável:</strong> {{ task.responsible }}</p>
    <p><strong>Descrição:</strong> {{ task.description }}</p>
    <p><strong>Prazo:</strong> {{ task.deadline }}</p>
    <p><strong>Tempo Estimado:</strong> {{ task.estimatedTime }}</p>
    <p><strong>Status:</strong> {{ task.status }}</p>
    <!-- Botões ou ações ficarão aqui -->
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  // Métodos para manipulação do TaskCard ficarão aqui
};
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
