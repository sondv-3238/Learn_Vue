import { createApp } from 'vue'

import App from './App.vue'
import ToDoList from './components/ToDoList.vue'

const app = createApp(App);

app.component('to-do-list', ToDoList);

app.mount('#app');
