import { createApp } from 'vue'

import App from './App.vue'
import TodoList from './components/TodoList.vue'
import AddList from './components/AddList.vue'
import CompleteList from './components/CompleteList.vue';
import UnfinishedList from './components/UnfinishedList.vue'
const app = createApp(App);

app.component('to-do-list', TodoList);
app.component('complete-list',CompleteList);
app.component('add-list', AddList);
app.component('unfinished-list',UnfinishedList);
app.mount('#app');