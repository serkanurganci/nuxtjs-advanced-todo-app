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
      <div class="w-40">
        <BarChart :data="barChartData" :options="barChartOptions" />
      </div>
      <div class="w-40">
        <PieChart :data="pieData" :options="pieOptions"/>
      </div>
    </div>

</template>

<script>
import backgroundImg from '/assets/images/background.jpeg'
import PieChart from "../components/PieChart";

export default {
  name: 'IndexPage',
  components: {PieChart},
  data(){
    return{
      img:backgroundImg,
      barChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
      pieOptions: {
        hoverBorderWidth: 20
      },
      pieData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      }
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
      @apply z-10 space-y-12 w-11/12 md:w-3/5 lg:w-2/5 mx-auto my-0 mt-14 md:mt-7 relative  ;
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
