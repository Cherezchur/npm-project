<template>
  <div class="todolist container">
    <h3>TodoList</h3>
    <TodoItem v-for="todo in todoList" :todo="todo"/>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import store from './../store/store'
import {computed} from 'vue'

const todoList = computed(() => { return store.getters['allTodos'] });

</script>

<style lang="scss" scoped>

</style>