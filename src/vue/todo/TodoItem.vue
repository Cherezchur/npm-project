<template>
  <div class="item">
    <input v-model="todoTitle" @change="editTodo">
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
  text: todoTitle, 
  id: props.todo.id
}

const deleteTodo = () => {
  store.dispatch('removeTodo', props.todo.id)
}

const editTodo = () => {
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