import { createStore } from 'vuex'

if(localStorage.todoList === 'undefined') { localStorage.removeItem('todoList')}

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
    ALLTODOS: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo)
    },
    removeTodo({ commit }, id) {
      commit('remove_todo', id)
    },
    editTodo({ commit }, editParams) {
      commit('edit_todo', editParams)
    }
  },
  mutations: {
    initialise_store(state) {
      if(localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    },
    add_todo(state, todo) {
      state.todos.push(todo)
    },
    remove_todo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    edit_todo(state, editParams) {
      const todosChange = state.todos.find(todo => todo.id === editParams.id)
      todosChange.title = editParams.text.value
    }
  },
  modules: {

  }
})

store.subscribe((change_state, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

export default store;