<template>
  <div class="todoList container">
    <h3 class="todoList__title">TodoList</h3>
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import store from './../store/store'
import { computed, onBeforeMount } from 'vue'

const todoList = computed(() => {
  return store.getters['ALLTODOS'] 
});

onBeforeMount(() => store.commit('initialise_store')) 

</script>

<style lang="scss" scoped>

.todoList {
  height: 100%;
  padding: 20px;
  background: linear-gradient(45deg, #588bb0,#00d4b6,#fcf837);

  &__title{
    color: white;
    text-align: center;
    margin-top: 0;
  }
}

</style>