<template>
  <div
    class="add-todo"
  >
        <span
          class="add-todo__check-icon"

        ></span>
    <form class="add-todo__form">
      <input
        type="text"
        placeholder="Create a new todo..."
        class="input"
        v-model="todoInput"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data(){
    return{
      todoInput:null
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
