<template>
  <form @submit.prevent="submitData" class="add-new">
    <h4>Add:</h4>
    <div>
      <input type="text" v-model="enterTodo"/>
      <button>Add Todo</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-todo"],
  data() {
    return {
      enterTodo: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-todo", this.enterTodo);
    },
  },
};
</script>
<style scoped>
.add-new button {
  margin: -40px 0 50px 10px ;
  padding: 4px 10px!important;
  border: 1px solid;
  border-radius: 5px;
}
</style>