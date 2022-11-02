<template>
  <div class="todoinput container">
    hi, <input v-model="name" type="text" placeholder="What your name?">
    <input v-model="todo" type="text">
    <button @click="addTodos">Add</button>
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

</style>