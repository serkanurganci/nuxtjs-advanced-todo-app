export const state = () => ({
  todoList: [
    {
      name:'Todo List Item',
      completion_date:'Incomplete',
      description:null,
      due_date:null,
      status:'pending'
    },
    {
      name:'Todo List Item 2',
      completion_date:'Incomplete',
      description:null,
      due_date:null,
      status:'pending'
    }
  ],
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
}
