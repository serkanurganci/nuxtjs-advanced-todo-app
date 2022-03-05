<template>
  <div
    ref="addTodoForm"
    class="add-todo"
  >
        <span
          class="add-todo__check-icon"
        ></span>
    <form @submit.prevent="addTodo"  class="add-todo__form">
      <input
        type="text"
        placeholder="Create a new todo..."
        class="input"
        v-model="todoModel.name"
      />
    </form>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: "AddTodo",
  data(){
    return{
      todoModel: {
        name:'',
        completion_date:Date.now(),
        description:'description',
        due_date:new Date(2022,3,5),
        status:'pending'
      },
    }
  },
  computed:{
  },
  methods:{
    ...mapMutations({addTodoMutation: 'addTodo'}),
     addTodo(){
      if (!this.todoModel.name.trim() || this.todoModel.name.length > 255) {
        return this.$refs.addTodoForm.classList.add(
          "border-2",
          "border-red-400"
        );
      }
      this.$refs.addTodoForm.classList.remove(
        "border-2",
        "border-red-400"
      );
      const todoModelStringify = JSON.stringify(this.todoModel)
       const todoModelParse = JSON.parse(todoModelStringify)
        this.addTodoMutation(todoModelParse)
       this.todoModel.name=''
    }
  }
}
</script>

<style lang="scss" scoped>
.add-todo{
  @apply rounded-md h-14 transition-colors relative  bg-gray-800 p-3 flex items-center ;
  &__check-icon{
    @apply w-5 h-5 bg-transparent border border-gray-600 rounded-full inline-block cursor-pointer;
  }
  &__form{
    @apply w-full h-full ml-5;
    .input{
      @apply bg-transparent w-full h-full inline-block text-gray-300 focus-visible:outline-none   ;
    }
  }
}
</style>
