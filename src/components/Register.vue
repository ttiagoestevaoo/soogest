<template>
    <!--FORMULÁRIO DE CADASTRO-->
    <div id="cadastro">
      <form method="post" action="" @submit.prevent="register">
        <h1>Cadastro</h1>
        <p>
          <label for="name">Nome</label>
          <input id="name" name="name" required="required" v-model="name" type="text" placeholder="Emerson Silvestre" />
        </p>

        <p>
          <label for="email">E-mail</label>
          <input name="email" required="required" type="email" v-model="email" placeholder="Email@email.com"/>
        </p>

        <p>
          <label for="password">Senha</label>
          <input name="password" required="required" type="password" v-model="password" placeholder="********"/>
        </p>

          <p>
          <label for="c_password">Confirmação senha</label>
          <input name="c_password" required="required" type="password" v-model="c_password" placeholder="********"/>
        </p>

        <p>
            <input type="submit" value="Cadastrar"/>
        </p>

        <p class="link">
          Já tem conta?
          <a href="#paralogin"> Ir para Login </a>
        </p>

      </form>

    </div>

</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      c_password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('registerUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password
      })
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Cadastro realizado com sucesso')
        })
    }
  }
}
</script>
