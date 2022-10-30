<template>
  <div class="todoinput container">
    <input type="text">
    <button @click="methodsaddTodo">Add</button>
  </div>
</template>

<script setup>
import { mapActions } from 'vuex';

const methods = { 
  ...mapActions(["addTodo"])
}
</script>

<style lang="scss" scoped>

</style>