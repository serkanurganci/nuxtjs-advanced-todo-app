<template>
 <div class="todo">
    <span
      class="todo__check-icon"
    ></span>
     <p class="transition-all">{{ todo.name }}</p>
 </div>
</template>

<script>
export default {
  name: "Todo",
  props:{
    todo:{
      type:Object,
      default:null
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo{
    @apply flex items-center w-full relative p-3 gap-x-4 h-14 border-b border-gray-300 border-gray-700 text-gray-300 select-text ;
    &__check-icon{
      @apply w-5 h-5 relative bg-transparent inline-block transition-all cursor-pointer border border-gray-600 rounded-full ;
    }
  }
</style>
