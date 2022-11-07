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
    ALLTODOS(state) {
      return state.todos
    }
  },
  actions: {
    initStore({commit, state}) {
      if(localStorage.getItem('store')) {
        commit('init_store', JSON.parse(localStorage.getItem('store')))
      } else {
        commit('init_store', state.todos)
      }
    },
    addTodo({ commit }, todo) {
      commit('add_todo', todo)
      commit('update_local_storage')
    },
    removeTodo({ commit }, id) {
      commit('remove_todo', id)
      commit('update_local_storage')
    },
    editTodo({ commit }, editParams) {
      commit('edit_todo', editParams)
      commit('update_local_storage')
    }
  },
  mutations: {
    init_store(state, payload) {
      state.todos = payload
    },
    add_todo(state, todo) {
      state.todos.push(todo)
    },
    remove_todo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    edit_todo(state, editParams) {
      const todosChange = state.todos.find(todo => todo.id === editParams.id)
      todosChange.title = editParams.text.value
    },
    update_local_storage(state) {  
      localStorage.setItem('store', JSON.stringify(state.todos))
    }
  },
  modules: {

  }
})

// store.subscribe((change_state, state) => {
//   localStorage.setItem('store', JSON.stringify(state))
// })

export default store;