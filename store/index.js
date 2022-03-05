export const state = () => ({
  todoModel: {
    name:'',
    completion_date:Date.now(),
    description:'description',
    due_date:new Date(2022,3,5),
    status:'pending'
  },
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
  addTodo(state) {
    const todoModelStringify = JSON.stringify(state.todoModel)
    const todoModelParse = JSON.parse(todoModelStringify)
    state.todoList.push(todoModelParse)
    state.todoModel.name = ''
  },
  removeTodo(state, payload) {
  },
  completedTodo(state, payload){
  },
  addTodoInput(state, payload){
    state.todoModel.name = payload
  }
}
