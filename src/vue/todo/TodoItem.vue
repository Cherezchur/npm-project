<template>
  <div class="item">
    <input v-model="todoTitle">
    <button @click="editTodo">Edit</button>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script setup>
import store from './../store/store'
import { ref } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
  }
})

const todoTitle = ref(props.todo.title)

const editsParams = {
  text: todoTitle.value, 
  id: props.todo.id
}

const deleteTodo = () => {
  store.dispatch('removeTodo', props.todo.id)
}

const editTodo = () => {
  console.log(props.todo.id);
  store.dispatch('editTodo', editsParams)
}

</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

</style>