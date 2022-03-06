<template>
  <div class="data-table">
    <table class="data-table__table">
      <thead>
      <tr class="data-table__header">
        <th v-for="(header,index) in dataTableHeader" :key="index">
          {{ header }}
        </th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="(data, dataIndex) in dataTableData" :key="dataIndex" class="data-table__data">
        <td v-for="(dataInside, dataInsideIndex) in data" :key="dataInsideIndex">
          {{ dataInside }}
        </td>
        <td class="flex items-center">
          <div
            class="data-table__action-icon mr-2 invert-0 dark:invert"
            @click="completeTodo(data)"
          > &#x2714;
          </div>
          <div
            class="data-table__action-icon ! mr-2"
            @click="editTodo(data)"
          >&#9999;
          </div>
          <div
            class="data-table__action-icon"
            @click="deleteTodo(data)"
          >x
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'TodoListDataTable',
  props: {
    dataTableHeader: {
      type: Array,
      default: () => ['Id','Name', 'Completion Date', 'Description', 'Due Date', 'Status','Actions']
    },
    dataTableData: {
      type: Array,
      default: () => [
        {
          id:0,
          name:'Todo List Item',
          completion_date:'incomplete',
          description:null,
          due_date:null,
          status:'pending'
        },
      ]
    },
  },
  methods:{
    ...mapMutations({setActiveEditTodo:'setActiveEditTodo',deleteTodoMutation: 'deleteTodo', completeTodoMutation: 'completedTodo'}),
    ...mapActions({deleteTodoAction:'deleteTodoAction'}),
    deleteTodo(todo) {
      // this.deleteTodoMutation(todo.id)
      this.deleteTodoAction(todo.id)
    },
    completeTodo(todo) {
      this.completeTodoMutation(todo.id)
    },
    editTodo(todo){
      this.setActiveEditTodo(todo)

    }
  }
}
</script>

<style scoped lang="scss">
.data-table{
  @apply w-full text-xs;
  &__table{
    @apply w-full;
  }
  &__header{
    @apply bg-purple-600 text-white ;
    th{
      @apply py-1 px-2 text-left;
      &:first-child{
        @apply rounded-tl-lg;
      }
      &:last-child{
        @apply rounded-tr-lg;
      }
    }
  }
  &__data{
    td{
      @apply py-2.5 px-5 text-left;
    }
  }
  &__action-icon{
    @apply text-lg cursor-pointer;

  }
}
</style>
