import { createApp } from 'vue'

import App from './App.vue'
import listToDo from './components/listToDo.vue'
import AddList from './components/AddList.vue'
const app = createApp(App);

app.component('to-do-list', listToDo);
app.component('add-list', AddList);
app.mount('#app');