<template>
  <div class="home">
    <header class="sticky top-0"></header>
    <main>
      <div class="text-3xl pb-16 m-8">Stats de ventes : {{ sumOut }} €</div>
      <div class="max-w-16">
        <VueApexCharts
          type="area"
          height="350"
          ref="chart"
          :options="sumByDay.chartOptions"
          :series="sumByDay.series"
        ></VueApexCharts>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import store from '@/store'
import { loggedIn } from '@/_helpers/auth-guard'

export default defineComponent({
  name: 'StatsView',
  components: {
    VueApexCharts,
  },
  computed: {
    sumOut() {
      let sumOut = 0
      for (let index = 0; index < store.state.data.length; index++) {
        // console.log(new Date(store.state.data[index].date).toLocaleDateString())
        if (store.state.data[index].type == 'OUT')
          sumOut += store.state.data[index].price
      }
      return sumOut
    },
    sumByDay() {
      let out: number[] = []
      let expense: number[] = []
      let label: string[] = []
      let mainData = store.state.data

      mainData = mainData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )

      // console.log(mainData.length)

      for (let index = 0; index < mainData.length; index++) {
        // console.log(index)

        let date = new Date(mainData[index].date)
        // console.log(date)

        let localeDate = date.toLocaleDateString()
        if (label.includes(localeDate)) {
          // console.log('include')

          //if amount is sell
          if (mainData[index].type == 'OUT') {
            out[label.indexOf(localeDate)] += mainData[index].price
            expense[label.indexOf(localeDate)] += 0
          } else {
            expense[label.indexOf(localeDate)] += mainData[index].price
            out[label.indexOf(localeDate)] += 0
          }
        } else {
          // console.log('else include')

          label.push(localeDate)
          if (mainData[index].type == 'OUT') {
            out.push(mainData[index].price)
            expense.push(0)
          } else {
            expense.push(mainData[index].price)
            out.push(0)
          }
        }
        // console.log(label.length == out.length)

        // this.$data.chartOptions.xaxis.categories= label
        // this.$data.series[0].data= out
      }
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: label,
          },
        },
        series: [
          {
            name: 'ventes',
            data: out,
          },
          {
            name: 'achats',
            data: expense,
          },
        ],
      }
    },
    // sumAmountByProdStack() {
    //   let mainData = store.state.data
    //   let tab: number[][] = []
    // },
  },

  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    loggedIn().then(res => {
      console.log('loggedIn : ' + res)
      if (!res) {
        next('/login')
      } else {
        next()
      }
    })
  },
})
</script>

<style>
/* .home {
}
header {
  min-height: 120px;
  background: #3c7a1f;
}
main {
  overflow-y: hidden;
  font-size: 20px;
} */
</style>
