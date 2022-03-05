<template>
  <div class="todo-list">
    <div v-for="(todo,index) in filteredTodoListGetter">
      <Todo
        :todo="todo"
        :todoId="index"
      ></Todo>
    </div>
    <div
      class="todo-list__status status"
    >
      <div class="text-xs">1 items left</div>
      <div
        class="status__status-items"
      >
        <p
          class="status-item"
          @click="filteredList('all')"
        >
          All
        </p>
        <p
          class="status-item"
          @click="filteredList('pending')"
        >
          Active
        </p>
        <p
          class="status-item"
          @click="filteredList('completed')"
        >
          Completed
        </p>
      </div>
      <div
        class="text-xs cursor-pointer dark:hover:text-[#d2d3db] hover:text-[#484b6a] transition-colors"

      >
        Clear Completed
      </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: "TodoList",
  computed:{
    ...mapState({todoList:'todoList'}),
    ...mapGetters({filteredTodoListGetter:'filteredTodoListGetter'})
  },
  mounted() {
    this.filteredStatusTodoList('all')
  },
  methods:{
    ...mapMutations(['filteredStatusTodoList']),
    filteredList(filterType){
      this.filteredStatusTodoList(filterType)
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-list{
    @apply overflow-x-hidden bg-gray-800 shadow-xl md:shadow-2xl rounded-md mt-12;
    &__status{
      @apply mb-24 md:mb-0 flex justify-between items-center p-3.5 text-gray-500 relative;
    }
    .status{
      &__status-items{
        @apply flex justify-center p-4 bg-white  bg-gray-800 shadow-lg  absolute -bottom-20 right-0 w-full space-x-3.5 text-sm font-bold rounded-lg md:bg-transparent md:p-0 md:shadow-none md:static md:rounded-none md:w-auto md:justify-start;
        .status-item {
          @apply cursor-pointer hover:text-gray-500 dark:hover:text-gray-200 transition-colors;
        }
      }
    }
  }
</style>
