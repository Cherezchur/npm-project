<template>
  <div class="todoList container">
    <h3 class="todoList__title">TodoList</h3>
    <TodoItem 
      v-for="todo in props.todoList" 
      :key="todo.id" 
      :todo="todo"
      @delete-todo="deleteTodo"
      @edit-todo="editTodo"
    />
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

const props = defineProps({
  todoList: {
    type: Array,
    default: () => []
  },
  deleteTodo: {
    type: Function,
    default: () => []
  },
  editTodo: {
    type: Function,
    default: () => []
  }
})

const deleteTodo = (id) => props.deleteTodo(id)

const editTodo = (editParams) => props.editTodo(editParams)

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