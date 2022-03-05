<template>
 <div class="todo">
    <span
      class="todo__check-icon"
    ></span>
     <p class="transition-all">{{ todo.name }}</p>
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
  methods:{
    ...mapMutations({deleteTodoMutation:'deleteTodo'}),
    deleteTodo(){
      this.deleteTodoMutation(this.todoId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo{
    @apply relative flex items-center w-full  p-3 gap-x-4 h-14 border-b border-gray-300 border-gray-700 text-gray-300 select-text ;
    &:hover{
      .todo__delete-icon{
        @apply inline-block;
      }
    }
    &__check-icon{
      @apply w-5 h-5 relative bg-transparent inline-block transition-all cursor-pointer border border-gray-600 rounded-full ;
    }
    &__delete-icon{
      @apply text-lg hidden inline-block absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer;
    }
  }
</style>
