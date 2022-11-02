<template>
  <div class="todolist container">
    <h3>TodoList</h3>
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import store from './../store/store'
import { computed, onMounted} from 'vue'

let todoList = computed(() => { 
  return store.getters['ALLTODOS'] 
});

onMounted(() => {
  if(localStorage.todoList) {
    todoList = JSON.parse(localStorage.getItem('todoList'))
  }
})

</script>

<style lang="scss" scoped>

</style>