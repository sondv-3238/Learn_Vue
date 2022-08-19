<template>
    <form @submit.prevent="submitData">
        <div class="add-todo">
            <label for="">Add todo:</label>
            <input type="text" v-model="enteredName">
            <button class="btn btn-add">Add</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-list'],
    data() {
        return {
            enteredName: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-list',
                this.enteredName,
            )
        }
    },
}
</script>
<style scoped>
.add-todo label {
    margin-right: 30px;
    color: #000;
    font-size: 20px;
}
.add-todo .btn-add {
    margin-left: 30px;
    background: rgb(27, 121, 138) !important;
    padding: 5px 20px !important;
    border: none !important;
    border-radius: 5px;
}
</style>