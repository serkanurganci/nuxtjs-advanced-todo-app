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
        placeholder="Todo name"
        class="input form-item"
        v-model="todoModel.name"
      />
      <div class="flex items-end mt-2">
        <textarea placeholder="Todo description" class="textarea form-item mr-1" v-model="todoModel.description"/>
        <div>
          <p class="text-gray-300 text-sm">Due Date:</p>
          <input v-model="todoModel.due_date" placeholder="saf" class="form-item" type="date"/>
        </div>
      </div>
      <button class="button text-sm" type="submit">Add</button>
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
        description:'',
        due_date:null,
        status:'pending'
      },
    }
  },
  computed:{
  },
  methods:{
    ...mapMutations({addTodoMutation: 'addTodo'}),
     addTodo(){
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
  @apply rounded-md  transition-colors relative  bg-gray-800 p-3 flex items-center text-gray-300;
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
    }
    .button{
      @apply py-1 px-2 text-gray-300 float-right bg-purple-600 mt-2 border border-purple-700 rounded-lg;
    }
  }
}
</style>
