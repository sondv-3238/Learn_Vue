<template>
  <section>
    <div class="head">
      <h1>TO DO LIST</h1>
    </div>
    <ul>
      <header>
        <add-list @add-list="addList"></add-list>
      </header>
      <header>
        <div>
          <h3>Unfinished</h3>
          <to-do-list :lists="lists">
            <template #default="Slot">
              <li v-if="!Slot.item.checked" class="unfinished">
                <input
                  type="checkbox"
                  v-model="Slot.item.checked"
                  onclick="checkBox(Slot.item.id)"
                />
                <h4>{{ Slot.item.name }}</h4>
              </li>
            </template>
          </to-do-list>
        </div>
        <div>
          <h3>Completed</h3>
          <to-do-list :lists="lists">
            <template #default="Slot">
              <li v-if="Slot.item.checked" class="complete">
                <input
                  type="checkbox"
                  v-model="Slot.item.checked"
                  onclick="checkBox(Slot.item.id)"
                />
                <b>
                  <h1>{{ Slot.item.name }}</h1>
                </b>
              </li>
            </template>
          </to-do-list>
          <div style="margin-top: 60px"></div>
          <button
            class="complete-list"
            @click="setSelectedComponent('complete-list')"
          >
            Completed List
          </button>
          <button
            class="todo-list"
            @click="setSelectedComponent('unfinished-list')"
          >
            To do List
          </button>
        </div>
      </header>
    </ul>
    <component :is="selectedComponent" :lists="lists"></component>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "Eat",
          checked: true,
        },
        {
          id: 2,
          name: "Sleep",
          checked: false,
        },
        {
          id: 3,
          name: "Running",
          checked: true,
        },
        {
          id: 4,
          name: "Swimming",
          checked: false,
        },
        {
          id: 5,
          name: "Work",
          checked: false,
        }
      ],
      selectedComponent: "complete-list",
      isEdit: false,
    };
  },
  methods: {
    addList(name) {
      const newToDoList = {
        id: new Date().toString(),
        name: name,
      };
      this.lists.push(newToDoList);
    },
    deleteList(id) {
      this.lists = this.lists.filter((list) => list.id !== id);
    },
    selectedCheckBox(id) {
      const idLists = this.lists.find((list) => list.id === id);
      idLists.checked = !idLists.checked;
    },
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
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

header {
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  color: rgb(99, 116, 201);
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app .head {
  background: #965d8e;
  padding: 50px;
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

#app h4 {
  display: flex;
  justify-content: center;
  color: black;
}

#app .complete {
  background-color: yellow;
  list-style: none;
}

#app .complete input {
  float: left;
}

#app .complete h1 {
  position: relative;
  margin-top: 5px;
  color: #fc2600;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #da59c8;
  margin: 0 0 1rem 0;
}

#app .unfinished {
  background-color: rgb(91, 207, 192);
  list-style: none;
}

#app .unfinished input {
  float: left;
}

#app .unfinished h4 {
  position: relative;
  margin-top: 5px;
}

#app .complete-list {
  background: rgb(94, 196, 214);
  padding: 10px;
  border: none;
  border-radius: 5px;
}

#app .todo-list {
  background: rgb(173, 39, 190);
  margin-left: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

#app .head h1 {
  text-align: center;
  color: aquamarine;
  font-size: 40px;
}
</style>