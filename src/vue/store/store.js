import { createStore } from 'vuex'

if(localStorage.todoList === 'undefined') { localStorage.removeItem('todoList')}

const store = createStore({
  state: {
    todos: localStorage.todoList ? 
      JSON.parse(localStorage.getItem('todoList')) : 
      [
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
    ALLTODOS: (state) => state.todos,
  },
  actions: {
    addLocalStorage({commit}) {
      commit('add_local_storage')
    },
    addTodo({ commit, dispatch }, todo) {
      commit('add_todo', todo)
      dispatch('addLocalStorage')
    },
    removeTodo({ commit, dispatch  }, id) {
      commit('remove_todo', id)
      dispatch('addLocalStorage')
    },
    editTodo({ commit, dispatch  }, editParams) {
      commit('edit_todo', editParams)
      dispatch('addLocalStorage')
    }
  },
  mutations: {
    add_local_storage(state) {
      localStorage.setItem('todoList', JSON.stringify(state.todos))
    },
    add_todo(state, todo) {
      state.todos.push(todo)
      store.getters['ALLTODOS']
    },
    remove_todo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
      store.getters['ALLTODOS']
    },
    edit_todo(state, editParams) {
      const todosChange = state.todos.find(todo => todo.id === editParams.id)
      todosChange.title = editParams.text.value
      store.getters['ALLTODOS']
    }
  },
  modules: {

  }
})

export default store;