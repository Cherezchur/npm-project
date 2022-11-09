<template>
  <div class="item">
    <input v-model="todoTitle" @change="$emit('editTodo', editsParams)">
    <button @click="$emit('deleteTodo', id)">Delete</button>
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

const id = props.todo.id

const todoTitle = ref(props.todo.title)

const editsParams = {
  text: todoTitle, 
  id: props.todo.id
}

</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

</style>