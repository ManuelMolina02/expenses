import { Doughnut } from '../../components/charts/baseChartsPizza.js'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Alimentação', 'Boletos/ Contas', 'Despesas de Casa', 'Farmácia'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#d47fa5',
            '#00D8FF',
            '#EA4335'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
