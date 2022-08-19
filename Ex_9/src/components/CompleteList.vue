<template>
    <div>
        <div v-for="list in lists" :key="list">
            <li v-if="list.checked" class="job">
                <b>
                    <h1>{{ list.name }}</h1>
                </b>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    props: ['lists'],
    data() {
        return {
        };
    },
};
</script>
<style scoped>

</style>