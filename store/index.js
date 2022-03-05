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
  ]
})

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
}
