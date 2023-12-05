<template>
  <div class="task-details">
    <the-header></the-header>
    <!-- Cabeçalho -->
    <!-- Conteúdo da tarefa específica -->
    <the-footer></the-footer>
    <!-- Rodapé -->
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";

export default {
  name: "TaskDetails",
  components: {
    TheHeader,
    TheFooter,
  },
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // Detalhes da tarefa podem ser buscados do estado global (Vuex) ou LocalForage
      taskDetails: null,
    };
  },
};
</script>

<style scoped>
.task-details {
}
</style>
