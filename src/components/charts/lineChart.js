import { Line } from '../../components/charts/baseChartsLine'
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Setembro', 'Outubro', 'Novembro'],
      datasets: [
        {
          label: 'Valor Gasto',
          backgroundColor: 'rgba(126, 114, 202, 0.712)',
          data: [1129.0, 979.0, 1132.0]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
