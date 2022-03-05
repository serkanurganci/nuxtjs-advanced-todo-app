export const state = () => ({
  todoList: [
    {
      name:'Todo List Item',
      completion_date:null,
      description:'description',
      due_date:null,
      status:'pending'
    },
    {
      name:'Todo List Item 2',
      completion_date:null,
      description:'description 2',
      due_date:null,
      status:'pending'
    }
  ],
  filteredTodoList:[],
  activeStatus:'all'
})
export const getters = {
  filteredTodoListGetter(state){
    return state.filteredTodoList
  },
  todoLeftGetter(state){
    const filteredTodo = state.todoList.filter(todo => todo.status === 'pending')
    return filteredTodo.length
  }
}
export const mutations = {
  addTodo(state, payload) {
    state.todoList.push(payload)
  },
  deleteTodo(state, payload) {
    state.todoList = state.todoList.filter((todo,index) => index !== payload)
    state.filteredTodoList = state.filteredTodoList.filter((todo,index) => index !== payload)
  },
  completedTodo(state, payload){
    const newDate = new Date
    const zero = (item) =>{return item < 10 ? '0' + item : item}
    const nowDate = zero(newDate.getDate())  + '.' + (zero(newDate.getMonth() + 1)) + '.' + newDate.getFullYear() + '  ' + zero(newDate.getHours()) + ':' + zero(newDate.getMinutes())
    const findTodo = state.todoList.find((todo, index) => index === payload)
    findTodo.status = findTodo.status === 'completed' ? 'pending' : 'completed'
    findTodo.completion_date = nowDate
  },
  clearCompletedTodos(state){
    state.todoList = state.todoList.filter(todo => todo.status !== 'completed')
  },
  filteredStatusTodoList(state,payload){
    if(payload === 'all'){
      state.filteredTodoList = state.todoList
    }else{
      state.filteredTodoList = state.todoList.filter(todo => todo.status === payload)
    }
  }
}
