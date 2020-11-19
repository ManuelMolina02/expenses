import { Line } from '../../components/charts/baseChartsLine'
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'Valor Gasto',
          backgroundColor: 'rgba(126, 114, 202, 0.712)',
          data: [550, 390, 410, 420, 306, 284.5, 650]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
