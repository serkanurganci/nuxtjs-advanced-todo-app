<template>
  <div class="todo-list">
    <div class="hidden md:flex justify-center items-center py-2 text-sm">
      <p class="mr-2">Kanban</p>
      <div class="todo-list__toggle">
        <input v-model="toggleSwitch" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox "/>
        <label for="toggle" class="toggle-label "></label>
      </div>
      <p>Data Table</p>
    </div>
    <div v-if="!toggleSwitch" class="todo-list__kanban">
      <div v-for="(todo) in filteredTodoList">
        <Todo
          :todo="todo"
          :todoId="todo.id"
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
    <TodoListDataTable :dataTableData="todoList" v-if="toggleSwitch" class="todo-list__data-table"/>

  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import TodoListDataTable from "./TodoListDataTable";

export default {
  name: "TodoList",
  components: {TodoListDataTable},
  data(){
    return{
      filterType:'all',
      toggleSwitch:false
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
    @apply text-gray-500 dark:text-gray-300 mt-10;
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
    &__kanban{
      @apply shadow-xl dark:bg-gray-800 md:shadow-2xl  rounded-md z-10 space-y-4 w-11/12 md:w-3/5 lg:w-2/5 mx-auto my-0 mt-4 relative;
    }
    &__data-table{
      @apply dark:bg-gray-800 shadow-2xl  rounded-md z-10 space-y-4  w-4/6  mx-auto my-0 mt-4 relative
    }
    &__clear-completed{
      @apply text-xs cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors;
    }
    &__toggle{
      @apply relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in;
      .toggle-checkbox{
        @apply absolute block w-6 h-6 rounded-full bg-gray-200 border-gray-400 dark:bg-white dark:border-gray-200 border-4 appearance-none cursor-pointer;
      }
      .toggle-label{
        @apply block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer;
      }
      .toggle-checkbox:checked {
        @apply right-0 border-purple-400 right-0;
      }
      .toggle-checkbox:checked + .toggle-label {
        @apply bg-purple-600;
      }
    }
  }

</style>
