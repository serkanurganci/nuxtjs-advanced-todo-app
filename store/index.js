import Vue from "vue";

export const state = () => ({
  todoList: [
    {
      id:0,
      name:'Todo List Item',
      completion_date:'incomplete',
      description:null,
      due_date:null,
      status:'pending'
    },
    {
      id:1,
      name:'Todo List Item 2',
      completion_date:'incomplete',
      description:null,
      due_date:null,
      status:'pending'
    }
  ],
  activeEditTodo:null,
  theme:'dark'
})
export const getters = {
  todoPendingGetter(state){
    return state.todoList.filter(todo => todo.status === 'pending')
  },
  todoCompletedGetter(state){
    return state.todoList.filter(todo => todo.status === 'completed')
  }
}
export const mutations = {
  addTodo(state, payload) {
    state.todoList.push(payload)
    this.commit('setLocalStorage')
  },
  editTodoMutation(state, payload){
    const findIndexEditTodo = state.todoList.findIndex(todo => todo.id === payload.id)
    state.todoList.splice(findIndexEditTodo,1,payload)
    this.commit('setLocalStorage')
  },
  deleteTodo(state, payload) {
    state.todoList = state.todoList.filter((todo) => todo.id !== payload)
    this.commit('setLocalStorage')
  },
  completedTodo(state, payload){
    const newDate = new Date
    const zero = (item) =>{return item < 10 ? '0' + item : item}
    const nowDate = newDate.getFullYear() + '-' + (zero(newDate.getMonth() + 1)) + '-' + zero(newDate.getDate())
    const findTodo = state.todoList.find((todo) => todo.id === payload)
    findTodo.status = findTodo.status === 'completed' ? 'pending' : 'completed'
    findTodo.completion_date = findTodo.completion_date === 'incomplete' ? nowDate : 'incomplete'
    this.commit('setLocalStorage')
  },
  clearCompletedTodos(state){
    state.todoList = state.todoList.filter(todo => todo.status !== 'completed')
    this.commit('setLocalStorage')
  },
  setActiveEditTodo(state,payload){
    state.activeEditTodo = payload
    this.commit('setLocalStorage')
  },
  setLocalStorage(state){
    localStorage.setItem("todos", JSON.stringify(state.todoList));
  },
  getLocalStorage(state){
    const getLocalStorage = localStorage.getItem('todos')
    const parseLocalStorage = JSON.parse(getLocalStorage)
    if(getLocalStorage){
      state.todoList = parseLocalStorage
    }
  }
}
