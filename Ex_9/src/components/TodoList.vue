<template>
  <div>
    <ul>
      <div v-for="list in lists" :key="list">
        <slot :item="list">
        </slot>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['click-checkbox'],
  props: ['lists'],
  data() {
    return {
    };
  },
  methods: {
    checkBox(){
      this.$emit('click-checkbox', this.id);
    }
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app .add-new {
  margin-top: -130px;
  font-size: 20px;
  color: #6e7fe0;
  background: #fff;
  padding: 0 0 20px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#app .add-new p {
  text-align: left;
  margin-left: 125px;
}

#app .add-new .form-control {
  font-size: 20px;
  border: 1px #6e7fe0 solid;
}

#app .add-new .btn {
  margin-left: 10px;
  border-radius: 5px;
  padding: 6px 20px;
  font-size: 15px;
}

#app .list {
  margin-top: -50px;
  font-size: 20px;
  color: #6e7fe0;
  background: #fff;
  padding: 0 0 20px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#app .list p {
  text-align: left;
  margin-left: 125px;
  width: 60%;
  position: absolute;
}

#app .list .form-control {
  font-size: 20px;
  border: 1px #6e7fe0 solid;
}

#app .list .btn {
  margin-left: 10px;
  border-radius: 5px;
  padding: 6px 20px;
  font-size: 15px;
}

#app .list .btn-edit {
  margin-left: 340px;
  position: relative;
  background-color: blue;
}

#app .list .btn-delete {
  margin-left: 10px;
  position: relative;
  background-color: red;
}

#app .list .edit {
  padding-bottom: 20px;
  border-bottom: 3px solid #f1f1f1;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: green;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app .add-btn {
  background: #ff0077;
  font-size: 20px;
  border: 2px #ff0077 solid;
  border-radius: 5px;
}

.list-todo input {
  float: left;
}

.list-todo li p {
  margin: 0 30px !important;
}

.active {
  background: #98dfbf;
}
</style>