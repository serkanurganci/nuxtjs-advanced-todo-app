<template>
  <div class="todo-list">
    <div v-for="(todo,index) in filteredTodoList">
      <Todo
        :todo="todo"
        :todoId="index"
      ></Todo>
    </div>
    <div
      class="todo-list__status status"
    >
      <div class="text-xs">{{todoPendingGetter.length}} items left</div>
      <div
        class="status__status-items"
      >
        <p
          class="status-item"
          @click="filteredList('all')"
          :class="{active:filterType === 'all'}"
        >
          All
        </p>
        <p
          class="status-item"
          @click="filteredList('pending')"
          :class="{active:filterType === 'pending'}"
        >
          Active
        </p>
        <p
          class="status-item"
          @click="filteredList('completed')"
          :class="{active:filterType === 'completed'}"
        >
          Completed
        </p>
      </div>
      <div
        class="todo-list__clear-completed"
        @click="handleClearCompletedTodos"
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
  data(){
    return{
      filterType:'all'
    }
  },
  computed:{
    ...mapState({todoList:'todoList'}),
    ...mapGetters({todoPendingGetter:'todoPendingGetter',todoCompletedGetter:'todoCompletedGetter'}),
    filteredTodoList(){
      if(this.filterType === 'all'){
        return this.todoList
      }else if(this.filterType ==='pending'){
        return this.todoPendingGetter
      }else{
        return this.todoCompletedGetter
      }
    }
  },
  methods:{
    ...mapMutations({clearCompletedTodos:'clearCompletedTodos'}),
    filteredList(filterType){
      this.filterType = filterType
    },
    handleClearCompletedTodos() {
      this.clearCompletedTodos()
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-list{
    @apply overflow-x-hidden bg-gray-100 dark:bg-gray-800 shadow-xl text-gray-500 dark:text-gray-300 md:shadow-2xl rounded-md mt-12;
    &__status{
      @apply mb-24 md:mb-0 flex justify-between items-center p-3.5  relative;
    }
    .status{
      &__status-items{
        @apply flex justify-center p-4    shadow-lg  absolute -bottom-20 right-0 w-full space-x-3.5 text-sm font-bold rounded-lg md:bg-transparent md:p-0 md:shadow-none md:static md:rounded-none md:w-auto md:justify-start;
        .status-item {
          @apply cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors;
        }
        .status-item.active{
          @apply text-gray-600 dark:text-gray-200;
        }
      }
    }
    &__clear-completed{
      @apply text-xs cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors;
    }
  }

</style>
