<template>
    <div>
        <div v-for="list in lists" :key="list">
            <li v-if="!list.checked" class="unfinished">
                <h4>{{ list.name }}</h4>
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