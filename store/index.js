import Vue from "vue";

export const state = () => ({
  todoList: [
    {
      id:0,
      name:'Todo List Item',
      completion_date:'Incomplete',
      description:null,
      due_date:null,
      status:'pending'
    },
    {
      id:1,
      name:'Todo List Item 2',
      completion_date:'Incomplete',
      description:null,
      due_date:null,
      status:'pending'
    }
  ],
  activeEditTodo:null,
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
  },
  editTodoMutation(state, payload){
    const findIndexEditTodo = state.todoList.findIndex(todo => todo.id === payload.id)
    state.todoList.splice(findIndexEditTodo,1,payload)
  },
  deleteTodo(state, payload) {
    state.todoList = state.todoList.filter((todo,index) => index !== payload)
  },
  completedTodo(state, payload){
    const newDate = new Date
    const zero = (item) =>{return item < 10 ? '0' + item : item}
    const nowDate = newDate.getFullYear() + '-' + (zero(newDate.getMonth() + 1)) + '-' + zero(newDate.getDate())
    const findTodo = state.todoList.find((todo, index) => index === payload)
    findTodo.status = findTodo.status === 'completed' ? 'pending' : 'completed'
    findTodo.completion_date = nowDate
  },
  clearCompletedTodos(state){
    state.todoList = state.todoList.filter(todo => todo.status !== 'completed')
  },
  setActiveEditTodo(state,payload){
    state.activeEditTodo = payload
  }
}
