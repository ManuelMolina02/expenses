<template>
<div class="first-animation">

<!-- Container layout -->
<div class="layout-cards">

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
      <h1 class="title-card">A Média do Total de  Gastos é de:</h1>
      <p class="money" v-money-format="totals.average"/>
      <h5>Em um total de {{ totals.count }} compras</h5>

    </div>
  </div>
</div>
<div class="layout-lists">
   <table class="content-table">
  <thead>
     <tr>
      <th scoped="col">Os 5 maiores gastos foram:</th>
     </tr>
  </thead>
      <tbody>
        <tr :key="index" v-for="(biggest,index) in totals.biggest" class="line-list">
            <td> {{ index +1 }}° {{ biggest.description }}</td>
            <td  v-money-format="biggest.value"/>
        </tr>
      </tbody>

 </table>

 <table class="content-table">
  <thead>
     <tr>
      <th scoped="col">Os 5 menores gastos foram:</th>
     </tr>
  </thead>
      <tbody>
        <tr :key="index" v-for="(lowest,index) in totals.lowest" class="line-list">
            <td> {{ index +1 }}° {{ lowest.description }}</td>
            <td  v-money-format="lowest.value"/>
        </tr>
      </tbody>

 </table>

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
        description: '',
        average: 0,
        biggest: {},
        lowest: {}
      }

      if (exp.length) {
        values.totalSpent = exp.map(e => +e.value)
          .reduce((acc, cur) => acc + cur, 0)

        values.count = exp.length

        values.average = values.totalSpent / exp.length

        values.biggest = exp.sort((a, b) => +b.value - +a.value).slice(0, 5)

        values.lowest = exp.sort((a, b) => +a.value - +b.value).slice(0, 5)
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
.layout-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:2rem;
  padding: 2rem 2rem 0 2rem;
  .card-container p{
  font-size: 2rem;
  color: rgb(255, 255, 255);
  border: 2px solid transparent;
  border-radius: 16px;
  background-color:#603dd371;
  width: 60%;
  padding: 3%;
  margin: .8rem auto;
}
}
.layout-lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:2rem;
  padding: 2rem;

  .card-container p{
  font-size: 1.4rem;
  color: rgb(255, 255, 255);
  border: 2px solid transparent;
  border-radius: 16px;
  background-color:#603dd38f;
  width: 35%;
  margin: .8rem auto;
}
}
//Conteiner dos cards
.card-container{
  min-height: 200px;
  border-radius: 16px;
  padding: 8px auto;
  text-align: center;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
  color: rgba(77, 76, 76, 0.705);
  transition: .2s linear .2s;
  &:hover{
    color: rgba(75, 75, 75, 0.89);
    background-color: #c3b8e741;
  }
}

//Título dos cards
.card-container h1{
  font-weight:bold;
  font-size: 1.4rem;
  padding: .2rem
}
.card-description{
  display: grid;
  grid-template-rows: 5fr 20%;
}

//Paragrafo dos cards

//Sub-títulos dos cards
.card-container h5{
  font-size: 1rem;
}
.title-card{
  border-bottom: .1rem solid #ccc;
}
.line-list{
  display: flex;
  align-items: center;

}
//corpo da tabela
.content-table {
  border-collapse: collapse;
  margin: 0 auto;
  font-size: .9em;

  width: 100%;
  height: 70%;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
}
.content-table td:first-child {
  width: 68%;
  color:rgb(50, 50, 50);
}

//colunas de dados
.content-table td {
  width: 32%;
  color:rgb(50, 50, 50);
}
.content-table td:nth-child(1) {
  font-size: 1.2rem;
  text-align: initial;
  color: rgb(122, 121, 121);

}
.content-table td:nth-child(2) {
  padding: .4rem;
  margin: .4rem .8rem;

  font-size: 1.2rem;
  text-align: center;

  background-color:#603dd371;
  color: rgb(255, 255, 255);
  border-radius:16px;
  border: 2px solid transparent;
}

.content-table thead tr {
  background-color: #8b76cfe1;
  color: white;
  text-align: left;

}
//enquadramento de conteúdo
.content-table th,
.content-table td {
  padding: 12px 15px;
}
.content-table tbody tr {
  border-bottom: 1px solid rgb(175, 175, 175);
  background-color:#ffffffc9;
    transition: .2s linear .2s;
        &:hover{
    color: rgba(75, 75, 75, 0.89);
    background-color: #a8a0c586;
  }
}
.content-table tbody tr:nth-of-type(even){
  background-color:rgba(226, 226, 226, 0.541);
  transition: .2s linear .2s;

        &:hover{
    color: rgba(75, 75, 75, 0.89);
    background-color: #a8a0c586;
  }
}
//selecionar ultimo filho da tabela
.content-table tbody tr:last-of-type{
  border-bottom: 2px solid rgb(105, 105, 105);
}
//animation
div .card-container {
  overflow: hidden;
  animation: fade 0.5s;
}

div .layout-lists{
  overflow: hidden;
  animation: fade 0.8s;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
