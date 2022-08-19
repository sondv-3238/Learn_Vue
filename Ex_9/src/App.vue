<template>
  <section>
    <div class="head">
    </div>
    <ul>
      <header>
        <add-list @add-list="addList"></add-list>
      </header>
      <header>
        <div>
          <to-do-list :lists="lists">
            <template #default="SlotProc">
              <li v-if="SlotProc.item.checked" class="job">
                <input type="checkbox" v-model="SlotProc.item.checked" onclick="checkBox(SlotProc.item.id)" />
                <b>
                  <h1>{{ SlotProc.item.name }}</h1>
                </b>
              </li>
            </template>
          </to-do-list>
          <div>
            <p>Job is Not Completed</p>
          </div>
          <to-do-list :lists="lists">
            <template #default="SlotProc">
              <li v-if="!SlotProc.item.checked" class="fail-job">
                <input type="checkbox" v-model="SlotProc.item.checked" onclick="checkBox(SlotProc.item.id)" />
                <h4>{{ SlotProc.item.name }}</h4>
              </li>
            </template>
          </to-do-list>
          <button style="background-color:green; color: black;" @click="setSelectedComponent('complete-list')">Complete List</button>
          <button style="background-color:yellow; color: black;" @click="setSelectedComponent('todo-list')">Todo List</button>
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
      lists: [{
        id: 1,
        name: 'LoL',
        checked: true,
      },
      {
        id: 2,
        name: 'CSGO',
        checked: false,
      },
      {
        id: 3,
        name: 'Dota 2',
        checked: true,
      },
      {
        id: 4,
        name: 'Valorant',
        checked: false,
      }
      ],
      selectedComponent: 'complete-list',
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
    selectedCheckBox(id) {
      const idLists = this.lists.find((list) => list.id === id);
      idLists.checked = !idLists.checked;
    },
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
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

#app h4 {
  display: flex;
  justify-content: center;
  color: black;
}


#app .job {
  background-color: yellow;
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

#app .fail-job {
  background-color: green;
}
</style>