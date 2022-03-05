export const state = () => ({
  todoList: [
    {
      name:'Todo List Item',
      completion_date:Date.now(),
      description:'description',
      due_date:new Date(2022,3,5),
      status:'pending'
    },
    {
      name:'Todo List Item 2',
      completion_date:Date.now(),
      description:'description 2',
      due_date:new Date(2022,3,5),
      status:'pending'
    }
  ],
  filteredTodoList:[],
  activeStatus:'all'
})
export const getters = {
  filteredTodoListGetter(state){
    return state.filteredTodoList
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
    const findTodo = state.todoList.find((todo, index) => index === payload)
    findTodo.status = findTodo.status === 'completed' ? 'pending' : 'completed'
  },
  filteredStatusTodoList(state,payload){
    if(payload === 'all'){
      state.filteredTodoList = state.todoList
    }else{
      state.filteredTodoList = state.todoList.filter(todo => todo.status === payload)
    }
  }
}
