<template>
  <div class="item">
    <input v-model="todoTitle" @change="editTodo">
    <button @click="deleteTodo(props.todo.id)">Delete</button>
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
const emit = defineEmits(['deleteTodo'])

const todoTitle = ref(props.todo.title)

const editsParams = {
  text: todoTitle, 
  id: props.todo.id
}

const deleteTodo = (id) => {
  emit('deleteTodo', id)
  store.dispatch('removeTodo', id)
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