<template>
  <div class="todoinput container">
    <div class="nameField">
      <span>Hi!</span>
      <input v-model="name" type="text" placeholder="What your name?">
    </div>
    <div class="addTodosField">
      <input v-model="todo" class="writeTodoField" type="text">
      <button @click="addTodos">Add</button>
    </div>
  </div>
</template>

<script setup>

import store from './../store/store'
import { ref, computed, watch, onMounted } from 'vue'

const todo = ref([])
const name = ref('')

const addTodos = () => {
  store.dispatch('addTodo', {id: Date.now(), title: todo.value})
  
}

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

onMounted(() => {
  name.value = localStorage.getItem('name');
})
</script>

<style lang="scss" scoped>
.nameField {
  display: flex;
  margin-bottom: 20px;
  input { 
    margin-left: 10px;
    color: green;
  }
}

.addTodosField {
  display: flex;
  margin-bottom: 20px;
  input { 
    border-bottom: 1px solid green;
  }
}

</style>