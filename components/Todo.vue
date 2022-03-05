<template>
 <div class="todo">
    <span
      class="todo__check-icon"
      :id="todo.status === 'completed' ? 'checked': ''"
      @click="completeTodo"
    >{{ todo.status === 'completed' ? '&#10004;' : '' }}</span>
     <div class="todo__content">
       <p class="transition-all todo-name" :class="todo.status === 'completed' ? 'checked-name': ''">{{ todo.name }}</p>
       <p class="todo__completion-date" v-if="todo.status ==='completed'">Completion Date: {{todo.completion_date}}</p>
       <p class="todo__due-date" v-if="todo.status ==='pending'">Due Date: {{todo.due_date ? todo.due_date : 'Not Entered'}}</p>
     </div>

   <div
     class="todo__delete-icon"
     @click="deleteTodo"
   >x</div>
 </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Todo",
  props:{
    todo:{
      type:Object,
      default:null
    },
    todoId:{
      type:Number,
      default:null
    }
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapMutations({deleteTodoMutation:'deleteTodo',completeTodoMutation:'completedTodo'}),
    deleteTodo(){
      this.deleteTodoMutation(this.todoId)

    },
    completeTodo(){
      this.completeTodoMutation(this.todoId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo{
    @apply relative flex items-center w-full  p-3 gap-x-4 h-14 border-b border-gray-300 border-gray-700 text-gray-300 select-text ;
    &:hover{
      .todo__delete-icon{
        @apply visible;
      }
    }
    &__check-icon{
      @apply w-5 h-5 text-sm relative bg-transparent inline-block transition-all cursor-pointer border border-gray-600 rounded-full ;
    }
    &__delete-icon{
      @apply text-lg invisible cursor-pointer;
    }
    &__content{
      @apply flex-1 flex items-center justify-between;
    }
    &__completion-date{
      @apply text-[7px] sm:text-xs;
    }
    &__due-date{
      @apply text-[7px] sm:text-xs;

    }
  }
  #checked {
    @apply bg-origin-border bg-gradient-to-tl from-purple-500 to-blue-500 border-transparent;
  }
  .checked-name {
    @apply text-[#9394a5] line-through decoration-[#484b6a];
  }
</style>
