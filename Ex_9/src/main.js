import { createApp } from 'vue'

import App from './App.vue'
import listToDo from './components/listToDo.vue'

const app = createApp(App);

app.component('to-do-list', listToDo);

app.mount('#app');