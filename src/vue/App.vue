<template>
  <div id="app">
    <TodoInput 
      :addTodo="addTodo"
    />
    <TodoList 
      :todoList="todoList"
      :deleteTodo="deleteTodo"
      :editTodo="editTodo"
    />
  </div>
</template>

<script setup>
import TodoInput from './todo/TodoInput.vue';
import TodoList from './todo/TodoList.vue';
import store from './store/store.js';
import {computed} from 'vue'

store.dispatch('initStore')

const todoList = computed(() => {
  return store.getters['ALLTODOS'] 
});

const addTodo = (todo) => store.dispatch('addTodo', {id: Date.now(), title: todo.value})

const deleteTodo = (id) => store.dispatch('removeTodo', id)

const editTodo = (editParams) => store.dispatch('editTodo',editParams)

</script>

<style lang="scss" scoped>

</style>