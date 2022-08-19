import { createApp } from 'vue'

import App from './App.vue'
import listToDo from './components/listToDo.vue'
import AddList from './components/AddList.vue'
import CompleteList from './components/CompleteList.vue';
import ToDoList from './components/ToDoList.vue'
const app = createApp(App);

app.component('to-do-list', listToDo);
app.component('complete-list',CompleteList);
app.component('add-list', AddList);
app.component('todo-list',ToDoList);
app.mount('#app');