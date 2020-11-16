<template>
<!-- Container layout -->
<div class="layout-home">

<!-- Cards -->
  <div class="card-container">
    <!-- Conteúdo do card -->
    <div class="card-content">
       <h1 class="title-card">Gasto Total Cadastrado foi de:</h1>
       <p class="money" v-money-format="totals.totalSpent"/>
       <h5>Em um total de {{ totals.count }} compras</h5>
     </div>
  </div>

  <div class="card-container">
    <div class="card-content">
      <h1 class="title-card">A média de Gastos é de:</h1>
      <p class="money" v-money-format="totals.average"/>
    </div>
  </div>

  <div class="card-container">
    <div class="card-content">
      <h1 class="title-card">O maior gasto foi:</h1>
      <p class="money" v-money-format="totals.biggest.value"/>
    </div>
  </div>

  <div class="card-container">
    <div class="card-content">
      <h1 class="title-card">O menor gasto foi:</h1>
      <p class="money" v-money-format="totals.lowest.value"/>
    </div>
  </div>

</div>

</template>

<script>

export default {
  name: 'Home',

  data: () => ({
    expenses: []
  }),

  created () {
    this.getData()
  },

  computed: {
    totals () {
      const { expenses: exp } = this
      const values = {
        totalSpent: 0,
        count: 0,
        average: 0,
        biggest: {},
        lowest: {}
      }

      if (exp.length) {
        values.totalSpent = exp.map(e => +e.value)
          .reduce((acc, cur) => acc + cur, 0)

        values.count = exp.length

        values.average = values.totalSpent / exp.length

        values.biggest = exp.sort((a, b) => +b.value - +a.value)[0]
        values.lowest = exp.sort((a, b) => +a.value - +b.value)[0]
      }

      return values
    }
  },

  methods: {
    getData () {
      const ref = this.$firebase.database().ref(`/${window.uid}`)

      ref.on('value', data => {
        const values = data.val()
        this.expenses = Object.keys(values).map(i => values[i])

        console.log(this.expenses)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
//Container layout
.layout-home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap:2rem;
  padding: 2rem;
}
//Conteiner dos cards
.card-container{
  border-radius: 16px;
  padding: 10px;
  text-align: center;
  align-items: center;
  background-color:#7159c1d7;
  border: 2px solid var(--featured-dark);
  color: rgba(255, 255, 255, 0.705);
  transition: .2s linear .2s;
  &:hover{
    color: rgba(255, 255, 255, 0.89);
    background-color: var(--featured);

  }
}

//Título dos cards
.card-container h1{
  font-weight:bold;
font-size: 1.2rem;
}

//Paragrafo dos cards
.card-container p{
  font-size: 1.8rem;
  color: rgb(255, 255, 255);
  border: 2px solid transparent;
  border-radius: 16px;
  background-color:#603dd38f;
  width: 60%;
  margin: .8rem auto;
}

//Sub-títulos dos cards
.card-container h5{
  font-size: 1rem;
}

</style>
