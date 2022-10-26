import { createApp } from "vue";
import App from './App.vue';

const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

if(root) {
  createApp(App).mount(root);
}