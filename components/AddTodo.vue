<template>
  <div
    ref="addTodoForm"
    class="add-todo"
  >
        <span
          class="add-todo__check-icon"
        ></span>
    <form @submit.prevent="handleTodoForm"  class="add-todo__form">
      <input
        type="text"
        placeholder="Todo name"
        class="input form-item"
        v-model="todoModel.name"
      />
      <div class="flex items-end mt-2">
        <textarea placeholder="Todo description" class="textarea form-item mr-1" v-model="todoModel.description"/>
        <div>
          <p class="text-sm">Due Date:</p>
          <input v-model="todoModel.due_date" placeholder="saf" class="form-item" type="date"/>
        </div>
      </div>
      <Button @click.native="handleTodoForm">{{ activeEditTodo ? 'Edit' : 'Add' }}</Button>
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
        id:null,
        name:'',
        completion_date:'incomplete',
        description:'',
        due_date:null,
        status:'pending'
      },
    }
  },
  computed:{
    ...mapState({todoList:'todoList',activeEditTodo:'activeEditTodo'}),
  },
  watch:{
    activeEditTodo(){
      if(this.activeEditTodo){
        const todoModelStringify = JSON.stringify(this.activeEditTodo)
        this.todoModel = JSON.parse(todoModelStringify)
      }
    }
  },
  methods:{
    ...mapMutations({addTodoMutation: 'addTodo',editTodoMutation:'editTodoMutation',setActiveEditTodo:'setActiveEditTodo'}),
     handleTodoForm(){
      const emptyForm =  {
        id:null,
        name:'',
        completion_date:'incomplete',
        description:'',
        due_date:null,
        status:'pending'
      }
      if (!this.todoModel.name.trim() || this.todoModel.name.length > 255 || this.todoModel.description > 1000) {
        return this.$refs.addTodoForm.classList.add(
          "border-2",
          "border-red-400"
        );
      }
      this.$refs.addTodoForm.classList.remove(
        "border-2",
        "border-red-400"
      );
      if(!this.activeEditTodo)this.todoModel.id = Math.floor(Math.random() * 99999)

      const todoModelStringify = JSON.stringify(this.todoModel)
       const todoModelParse = JSON.parse(todoModelStringify)

       if(this.activeEditTodo){
         this.editTodoMutation(todoModelParse)
         this.setActiveEditTodo(null)
       }
       else this.addTodoMutation(todoModelParse)
       this.todoModel = emptyForm
    }
  }
}
</script>

<style lang="scss" scoped>
.add-todo{
  @apply rounded-md  transition-colors relative bg-gray-100 dark:bg-gray-800 p-3 flex items-center text-gray-500 dark:text-gray-300;
  &__check-icon{
    @apply w-5 h-5 bg-transparent border border-gray-600 rounded-full inline-block cursor-pointer;
  }
  &__form{
    @apply w-full h-full ml-5;
    .form-item{
      @apply p-2 bg-transparent w-full h-full inline-block  focus-visible:outline-none border-b border-gray-300;
    }
    .input{
    }
    .textarea{
      @apply resize-none
    }

  }
}
input[type="date"]::-webkit-calendar-picker-indicator {
  @apply invert-0 dark:invert;
}
</style>
