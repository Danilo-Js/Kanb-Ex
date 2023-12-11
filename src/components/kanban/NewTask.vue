<template>
  <div>
    <button v-if="!showForm" @click="toggleForm">Adicionar Tarefa</button>
    <div v-if="showForm" class="new-task">
      Nome da tarefa <input v-model="name" type="text" /> Responsável
      <input v-model="responsible" type="text" /> Descrição
      <input v-model="description" type="text" /> Prazo máximo
      <input v-model="deadline" type="text" /> Prazo estimado
      <input v-model="estimatedTime" type="text" />
      <button @click="add">Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      name: "",
      responsible: "",
      description: "",
      deadline: "",
      estimatedTime: "",
      status: "",
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
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
      this.toggleForm();
    },
  },
};
</script>

<style scoped>
.new-task {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  color: #333;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.new-task input[type="text"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.new-task button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.new-task button:hover {
  background-color: #333;
}

.new-task label {
  margin-top: 10px;
  font-weight: bold;
}

.new-task p {
  display: none;
}

button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  width: 100%;
}

button:hover {
  background-color: #333;
}
</style>
