<template>
    <div id="login">
        <form method="post" action="" @submit.prevent="login">
        <h1>Login</h1>
        <p>
            <label for="email_login">E-mail</label>
            <input id="email_login" name="email_login" required="required" type="text" v-model="email_login" placeholder="Email@email.com"/>
        </p>

        <p>
            <label for="senha_login">Senha</label>
            <input id="senha_login" name="senha_login" required="required" type="password" v-model="senha_login" placeholder="*******" />
        </p>

        <p>
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
            <label for="manterlogado">Manter-me logado</label>
        </p>

        <p>
            <input type="submit" value="Logar" />
        </p>

        <p class="link">
            Ainda não tem conta?
            <a href="#paracadastro">Cadastre-se</a>
        </p>
        </form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email_login: '',
      senha_login: '',
      mode: '',
      snackbar: true,
      timeout: 6000,
      x: 'right',
      y: 'top'
    }
  },
  methods: {
    login () {
      this.$store.dispatch('retrieveToken', {
        email_login: this.email_login,
        senha_login: this.senha_login
      })
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Login realizado com sucesso')
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>
