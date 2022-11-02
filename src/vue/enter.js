import { createApp } from "vue";
import App from './App.vue';
import store from './store/store.js'

const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

if(root) {
  createApp(App).use(store).mount(root);
}