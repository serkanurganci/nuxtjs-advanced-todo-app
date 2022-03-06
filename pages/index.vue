<template>
    <div class="home">
      <div
        class="home__background"
        :style="{ backgroundImage: `url(${img})` }"
      />
      <div class="home__container container">
        <header class="container__header">
          <div class="w-full flex items-center justify-between">
            <h1
              class="heading"
            >
              TODO
            </h1>
            <img
              tabindex="0"
              @click="changeTheme"
              :src="require(`/assets/images/icon-${themeIcon}.svg`)"
              alt="theme"
              class="cursor-pointer select-none"
            />
          </div>
          <nav class="w-full">
            <Button @click.native="activeTab='Statistics'" :active="activeTab ==='Statistics'">Statistics</Button>
            <Button @click.native="activeTab = 'TodoList'" class="mr-2" :active="activeTab ==='TodoList'">Todo List</Button>
          </nav>
        </header>
        <div>
          <AddTodo/>
        </div>
      </div>
      <component :is="activeTab"></component>

    </div>

</template>

<script>
import backgroundDark from '/assets/images/backgroundDark.jpeg'
import backgroundLight from '/assets/images/backgroundLight.jpeg'
import PieChart from "../components/PieChart";
import Button from "../components/Button";
import {mapActions} from 'vuex'

export default {
  name: 'IndexPage',
  components: {Button, PieChart},
  data(){
    return{
      themeIcon:'light',
      img:localStorage.theme === "light"
        ? backgroundLight
        : backgroundDark,
      activeTab:'TodoList'
    }
  },
  created() {
    if (localStorage.theme === "light" || !localStorage.getItem("theme")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      this.themeIcon = "dark";
      this.img = backgroundLight;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      this.themeIcon = "light";
      this.img = backgroundDark;
    }
  },
  methods:{
    ...mapActions({getTodosAction:'getTodosAction'}),
    changeTheme() {
      if (localStorage.theme === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        this.themeIcon = "light";
        this.img = backgroundDark;
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        this.themeIcon = "dark";
        this.img = backgroundLight;
      }
    },
  },
  mounted() {
    // this.$store.commit('getLocalStorage')
    this.getTodosAction()
  }
}
</script>

<style lang="scss">
  .home{
    @apply h-screen dark:bg-slate-900;
    &__background{
     @apply absolute z-0 h-[21rem] w-full bg-cover bg-no-repeat inset-0 ;
    }
    &__container{
      @apply z-10 space-y-4 w-11/12 md:w-3/5 lg:w-2/5 mx-auto my-0 mt-7 md:mt-7 relative  ;
    }
    .container{
      &__header{
        @apply flex flex-col items-start justify-between  p-2 rounded-md;
        .heading{
          @apply text-white font-bold tracking-widest text-4xl md:text-5xl tracking-[1rem];
        }
      }
    }
  }
</style>
