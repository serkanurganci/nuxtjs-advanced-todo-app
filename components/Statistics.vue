<template>
 <div class="statistics">
   <div class="statistics__chart">
     <PieChart :data="pieData" :options="pieOptions"/>
   </div>
   <div class="statistics__chart">
     <BarChart :data="barChartData" :options="barChartOptions" />
   </div>
 </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "Statistics",
  data(){
    return{
      pieOptions: {
        hoverBorderWidth: 20,
        fontColor: '#ffffff'
      },

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
          text: "Todo analytics data",
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
    }
  },
  computed:{
    ...mapState({todoList:'todoList'}),
    ...mapGetters({todoPendingGetter:'todoPendingGetter',todoCompletedGetter:'todoCompletedGetter'}),
    pieData() {
      return{
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Completed", "Pending"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#7e22ce", "#eab308"],
            data: [this.todoCompletedGetter.length, this.todoPendingGetter.length]
          }
        ]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .statistics{
    @apply w-full mt-12 flex items-center justify-between;
    &__chart{
      @apply w-[9rem] sm:w-[15rem];
    }
  }
</style>
