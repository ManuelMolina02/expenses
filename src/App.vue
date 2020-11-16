<template>
  <div id="app">
    <base-spinner />
    <layout-notification/>
    <!-- <router-view/> -->
    <div class="container-fluid" v-if="isLogged">
      <div class="row">
        <div class="col-2 navigation-sidebar">

          <div class="container-logo">
            <i class="fas fa-donate fa-3x"></i>
            <h1 class="app-title">
              Controle de Despesas</h1>
          </div>

          <layout-navigation/>
        </div>
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>

    <router-view v-else />
  </div>
</template>

<script>

import BaseSpinner from './components/global/BaseSpinner'
import LayoutNavigation from './components/layout/LayoutNavigation'
import LayoutNotification from './components/layout/LayoutNotification'

export default {
  name: 'App',
  components: {
    BaseSpinner,
    LayoutNavigation,
    LayoutNotification
  },
  data: () => ({ isLogged: false }),
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user

      this.$router.push({ name: window.uid ? 'home' : 'login' })

      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
    })
  }
}
</script>

<style lang="scss">
#app {
  background-color: white;
  color: var(--light);
  min-height: 100vh;
}
.navigation-sidebar {
    background: linear-gradient(326.54deg, #29b6d1 0%,var(--featured-dark) 100%) !important;
}

.container-logo{
  display: flex;
  padding: 14px 8px;
}
.app-title{
  font-size: 14pt;
  margin-top: 10px;
  text-align: center;
}

</style>
