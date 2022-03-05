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
  add(state, payload) {
  },
  remove(state, payload) {
  },
  completed(state, payload){
  }
}
