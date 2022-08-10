<template>
  <section>
    <div class="head">
    </div>
    <ul>
      <header>
        <add-list @add-list="addList"></add-list>
      </header>
      <header>
        <div class="list">
          <div class="edit">
            <h4><strong>Edit:</strong></h4>
            <input class="form-control" />
            <button class="btn">Save</button>
          </div>
          <to-do-list v-for="list in lists" :key="list.id" :id="list.id" :name="list.name" :checked="true"
            @delete="deleteList" @edit ="editList"></to-do-list>
        </div>
      </header>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
    };
  },
  methods: {
    addList(name) {
      const newToDoList = {
        id: new Date().toString(),
        name: name,
      }
      this.lists.push(newToDoList);
    },
    deleteList(id) {
      this.lists = this.lists.filter((list) => list.id !== id);
    },

  },
}
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

header {
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app .head {
  background: #58004d;
  padding: 100px;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
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
</style>