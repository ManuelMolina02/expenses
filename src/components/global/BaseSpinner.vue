<template>
<!-- diretivas de condicional -->
  <div class="base-spinner fa-3x" v-if="visible">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.$root.$on('Spinner::show', () => { this.visible = true })
    this.$root.$on('Spinner::hide', () => { this.visible = false })
  },
  methods: {
    alternarSpinner () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.base-spinner{
  top:0;
  bottom:0;
  right: 0;
  left: 0;
  position:absolute;
  width:100vw;
  height:100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(255, 255, 255);
  color: var(--featured);

  z-index: 10000000;
}
</style>
