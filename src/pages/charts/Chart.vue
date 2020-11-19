<template>
<div class="layout-container">
  <div class="container-grafic">
    <div class="Chart">
      <h1 style="text-align:center;">Valor Gasto por Meses</h1>
      <line-example/>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Tipos de Gastos</h1>
      <doughnut-example/>
    </div>

  </div>
</div>

</template>

<script>
import LineExample from '../../components/charts/lineChart'
import DoughnutExample from '../../components/charts/doughnutExample'

export default {
  components: {
    LineExample,
    DoughnutExample
  },
  data () {
    return {
      dataPoints: null
    }
  },
  mounted () {
    setInterval(() => {
      this.fillData()
    }, 2000)
  },
  methods: {
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    fillData () {
      this.dataPoints = {
        labels: ['January' + this.getRandomInt(), 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    }
  }
}
</script>

<style>
.layout-container{
  padding: 4% 2%;
}
  .container-grafic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap:3.5%;
  }

  .Chart:first-child {
    padding: 2%;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;

    width: 100%;
    height: 100%;
  }
  .Chart h1{
    font-size: 1.8em;
    color: rgb(107, 107, 107);
  }

   .Chart:nth-child(2) {
    padding: 2%;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;

    width: 60%;
    height: 100%;
  }

</style>
