<template>
  <div class="page-landing">
    <section  @submit.prevent="doLogin()" >
      <div class="title-page">
        <i class="fas fa-donate fa-3x"></i>
        <h1>Controle de Despesas</h1>
      </div>

      <div class="form-wrapper">
        <form>
          <div class="input-block">
            <label for="login-email">
              <i class="fa fa-envelope "></i>
              Email</label>
            <input
            required
            type="email"
            v-model="email"
            id="login-email"
            placeholder="E-mail"
            />
          </div>
          <div class="input-block">
            <label for="login-password">
                  <i class="fa fa-key "></i>
                  Password</label>
            <input
            type="password"
            id="login-password"
            v-model="password"
            class="form-control"
            placeholder="Senha">
            />
          </div>
          <button type="submit" class="btn-login" :disabled="loading">
            <template v-if="loading">
              Entrando...
              <i class="fa fa-spinner fa-spin"></i>
            </template>

            <template v-else>
              Entrar
              <i class="fa fa-sign-in-alt"></i>
            </template>
        </button>
        </form>
      </div>
      <ul class="squares"></ul>
    </section>
  </div>

</template>

<script>

export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async doLogin () {
      this.loading = true
      const { email, password } = this
      try {
        const res = await this.$firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        window.uid = res.user.uid
        this.$router.push({ name: 'home' })
      } catch (err) {
        let message = ''
        switch (err.code) {
          case 'auth/user-not-found':
            message = 'Não foi possível localizar o usuário.'
            break
          case 'auth/wrong-password':
            message = 'Senha inválida.'
            break
          default:
            message = 'Não foi possível fazer login, tente novamente.'
        }
        this.$root.$emit('Notification::show', {
          message,
          type: 'danger'
        })
      }
      this.loading = false
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (window.uid) {
        vm.$router.push({ name: 'home' })
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.page-landing{
      /* background: linear-gradient(326.54deg, #29b6d1 0%,var(--featured-dark) 100%); */
      background: linear-gradient(326.54deg, #29b6d1 0%,var(--featured-dark) 100%);
      width: 100vw;
      height: 100vh;
}
.title-page{
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-page i {
  padding: 8px;
}

.title-page h1{
  font-weight: bold;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 32px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
}

form {
  margin: 20px 0;
  background-color: white;
  padding: 30px 25px;
  border-radius: 5px;
}

form .input-block {
  margin-bottom: 20px;
}

form .input-block label {
  font-size: 14px;
  color: darkslateblue;
}

form .input-block input {
  width: 100%;
  display: block;
  margin-top: 8px;
  padding: 7px;
  font-size: 16px;
  color: #7159c1;
  border-radius: 2px;
  border: 1px solid #ccddef;
  outline-color: #7159c1;
}

form .btn-login {
  display: block;
  min-width: 120px;
  border: none;
  background-color: #7159c1;
  color: white;
  border-radius: 25px;
  margin: auto;
  padding: 7px;
}

/* APARIÇÃO DO FORM */
form {
  overflow: hidden;
  animation: fade 0.2s;
}

form .input-block:nth-child(1) {
  animation: move 500ms;
}

form .input-block:nth-child(2) {
  animation: move 400ms;
  animation-delay: 100ms;
  animation-fill-mode: backwards;
}

form .btn-login {
  animation: move 400ms;
  animation-delay: 250ms;
  animation-fill-mode: backwards;
}

@keyframes move {
  from {
    opacity: 0;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
