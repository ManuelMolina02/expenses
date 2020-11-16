<template>
<div class="page-landing">

<nav class="nav flex-column justify-content-between">
 <div>

 <router-link
 exact
 :key="i"
 exact-active-class="active"
 class="nav-link"
 :to="{name: router.name}"
 v-for="(router, i) in routerLinks"
 >
 <i class="fa" :class="`fa-${router.meta.icon}`"></i>
 {{ router.meta.title }}
 </router-link>

 <hr>

 <layout-new-expense />
 </div>

 <layout-logout/>

</nav>
</div>
</template>

<script>
import LayoutLogout from './LayoutLogout'
import LayoutNewExpense from './LayoutNewExpense'

export default {
  components: {
    LayoutLogout,
    LayoutNewExpense
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(r => r.name !== 'login')
    }
  }
}
</script>

<style scoped  lang="scss">

  .nav {
      width: 14.2rem;
      height: 35.9rem;
      margin-left:-15px;
  }
  .nav-link {
    display: block;
    border:none;
      color: var(--white);
      transition: .3s;
      &.active{
          color: var(--white);
          background-color: var(--featured-dark);
      }
      &:hover{
          color: var(--white);
          box-shadow:  0 0 14px var(--featured-dark);
          background-color: var(--featured);
      }
  }

</style>
