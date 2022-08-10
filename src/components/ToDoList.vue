<template>
  <section>
    <li :key="id" :class="{ active: checkDone }">
      <input type="checkbox" v-model="checkDone" :value="checkDone" @click="checkDoneTodo"/>
      <p>{{ name }}</p>
      <button class="btn btn-edit">Sửa</button>
      <button class="btn btn-delete">Xóa</button>
    </li>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      checkDone: this.checked,
    };
  },
  methods: {
    checkDoneTodo() {
      this.checkDone = !this.checkDone;
    },
  },
};
</script>