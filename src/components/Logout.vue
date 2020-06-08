<template>
    <v-btn text small v-on:click="logout" >
        Logout
    </v-btn>
</template>
<script>
export default {
  methods: {
    logout (event) {
      this.$store.dispatch('forgetToken')
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Logout realizado com sucesso')
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>
