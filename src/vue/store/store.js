import { createStore } from 'vuex'

const store = createStore({
  state: {
    todos: [
      {
        id: 1,
        title: 'One'
      },
      {
        id: 2,
        title: 'Two'
      },
      {
        id: 3,
        title: 'Three'
      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    removeTodo({ commit }, todoId) {
      commit('remove_todo', todoId)
    },
    editTodo({ commit }, editParams) {
      commit('edit_todo', editParams)
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    remove_todo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    },
    edit_todo(state, editParams) {
      console.log(editParams.text, editParams.id);
      state.todos.find(todo => todo.id === editParams.id)
    }
  },
  modules: {

  }
})

export default store;