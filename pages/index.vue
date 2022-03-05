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
      </header>
      <main>
        <AddTodo/>
        <TodoList/>
      </main>
    </div>
  </div>
</template>

<script>
import backgroundImg from '/assets/images/background.jpeg'

export default {
  name: 'IndexPage',
  data(){
    return{
      img:backgroundImg
    }
  }
}
</script>

<style lang="scss">
  .home{
    @apply h-screen bg-slate-900;
    &__background{
     @apply absolute z-0 h-64 w-full bg-cover bg-no-repeat inset-0 ;
    }
    &__container{
      @apply z-10 space-y-12 w-11/12 md:w-3/5 lg:w-2/5 mx-auto my-0 mt-14 md:mt-20 relative  ;
    }
    .container{
      &__header{
        @apply flex items-center justify-between;
        .heading{
          @apply text-white font-bold tracking-widest text-4xl md:text-5xl ;
        }
      }
    }
  }
</style>
