<template>
    <div class="home">
      <div
        class="home__background"
        :style="{ backgroundImage: `url(${img})` }"
      />
      <div class="home__container container">
        <header class="container__header">
          <h1
            class="heading"
          >
            TODO
          </h1>
          <nav class="w-full">
            <Button @click.native="activeTab='Statistics'" :active="activeTab ==='Statistics'">Statistics</Button>
            <Button @click.native="activeTab = 'TodoList'" class="mr-2" :active="activeTab ==='TodoList'">Todo List</Button>
          </nav>
        </header>
        <div>
          <AddTodo/>
<!--          <TodoList/>-->
          <component :is="activeTab"></component>
        </div>
      </div>

    </div>

</template>

<script>
import backgroundImg from '/assets/images/background.jpeg'
import PieChart from "../components/PieChart";
import Button from "../components/Button";

export default {
  name: 'IndexPage',
  components: {Button, PieChart},
  data(){
    return{
      img:backgroundImg,
      activeTab:'Statistics'
    }
  },
}
</script>

<style lang="scss">
  .home{
    @apply h-screen bg-slate-900;
    &__background{
     @apply absolute z-0 h-80 w-full bg-cover bg-no-repeat inset-0 ;
    }
    &__container{
      @apply z-10 space-y-4 w-11/12 md:w-3/5 lg:w-2/5 mx-auto my-0 mt-7 md:mt-7 relative  ;
    }
    .container{
      &__header{
        @apply flex flex-col items-start justify-between bg-[rgba(0,0,0,0.4)] p-2 rounded-md;
        .heading{
          @apply text-white font-bold tracking-widest text-4xl md:text-5xl ;
        }
      }
    }
  }
</style>
