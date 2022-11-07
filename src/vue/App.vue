<template>
  <div id="app">
    <TodoInput :addTodo="addTodo"/>
    <TodoList :todoList="todoList"/>
  </div>
</template>

<script setup>
import TodoInput from './todo/TodoInput.vue';
import TodoList from './todo/TodoList.vue';
import store from './store/store.js';
import {computed} from 'vue'

store.dispatch('initStore')

const emit = defineEmits(['deleteTodo'])

emit('deleteTodo', (id) => {
  console.log(id)
})

const todoList = computed(() => {
  return store.getters['ALLTODOS'] 
});

const addTodo = (todo) => {
  console.log(todo, 'todo')
  store.dispatch('addTodo', {id: Date.now(), title: todo.value})
}


console.log(todoList.value);

// return {
//   todoList
// }

</script>

<style lang="scss" scoped>

</style>