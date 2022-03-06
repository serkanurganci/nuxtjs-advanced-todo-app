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
import {groupBy} from "lodash";

export default {
  name: "Statistics",
  data(){
    return{
      pieOptions: {
        hoverBorderWidth: 20,
        fontColor: '#ffffff',
        legend: {
          labels: {
            fontColor:  "#9498a1"
          }
        }
      },
    }
  },
  computed:{
    ...mapState({todoList:'todoList'}),
    ...mapGetters({todoPendingGetter:'todoPendingGetter',todoCompletedGetter:'todoCompletedGetter'}),
    pieData() {
      return{
        hoverBackgroundColor: "blue",
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
    barChartData(){
      return  {
        labels: Object.keys(this.groupTodoList),
        datasets: [
          {
            label: "Todo",
            data: this.groupTodoListCount,
            backgroundColor: "rgba(175, 1, 126, 0.4)",
            borderColor: "rgba(175, 1, 126, 1)",
            borderWidth: 2,
          },
        ],
      }
    },
    barChartOptions(){
      return {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Completed Todo Time Series",
          fontSize: 24,
          fontColor:  "#9498a1"
        },
        tooltips: {
          backgroundColor: "#6159ED",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color:'#9498a1'
              },
              ticks:{
                fontColor:'#9498a1'
              }
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                stepSize: 1,
                fontColor:'#9498a1'
              },
              gridLines: {
                display: true,
                color:'#9498a1'
              },
            },
          ],
        },
      }
    },

    groupTodoList(){
      return groupBy(this.todoList, function (n) {
        return n.completion_date
      })
    },
    groupTodoListCount(){
      const objLength = Object.values(this.groupTodoList)
      return objLength.map(obj => {
        return obj.length
      })
    }

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
