<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <button>Add List</button>
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