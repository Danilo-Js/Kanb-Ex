<template>
  <div class="new-task">
    <p></p>
    Nome Da Tarefa: <input v-model="name" type="text" /> Responsável:
    <input v-model="responsible" type="text" /> Descrição:
    <input v-model="description" type="text" />
    <p></p>
    Prazo Máximo: <input v-model="deadline" type="text" /> Prazo Estimado:
    <input v-model="estimatedTime" type="text" />
    <p></p>
    <button @click="add()">Adicionar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      responsible: "",
      description: "",
      deadline: "",
      estimatedTime: "",
      status: "",
    };
  },
  methods: {
    add() {
      if (
        this.name === "" ||
        this.responsible === "" ||
        this.description === "" ||
        this.deadline === "" ||
        this.estimatedTime === ""
      ) {
        (this.name = ""),
          (this.description = ""),
          (this.responsible = ""),
          (this.deadline = ""),
          (this.estimatedTime = "");
      } else {
        this.$store.dispatch("addTask", {
          id: Date.now(),
          name: this.name,
          responsible: this.responsible,
          description: this.description,
          deadline: this.deadline,
          estimatedTime: this.estimatedTime,
          status: "active",
        });
        (this.name = ""),
          (this.description = ""),
          (this.responsible = ""),
          (this.deadline = ""),
          (this.estimatedTime = "");
      }
    },
  },
};
</script>

<style scoped>
.new-task {
  align-content: center;
  padding: 5px;
  border-radius: 10px;
  background-color: gray;
  color: black;
}
</style>
