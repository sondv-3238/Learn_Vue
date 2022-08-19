<template>
    <form @submit.prevent="submitData">
        <div classs="add-todo">
            <label for="">Name</label>
            <input type="text" v-model="enteredName">
            <button>Add</button>
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
</style>