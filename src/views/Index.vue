<template>
    <div id="index">
        <IndexAuth v-if="loggedIn"></IndexAuth>
        <IndexGuest v-else></IndexGuest>
        <Notification :message="message" @snackMessage="snackMessage"></Notification>

    </div>
</template>

<script>
// @ is an alias to /src
import IndexAuth from '@/views/IndexAuth.vue'
import IndexGuest from '@/views/IndexGuest.vue'

export default {
  name: 'index',
  data () {
    return {
      message: 'Teste'
    }
  },
  methods: {
    snackMessage (message) {
      console.log('Teste')
      this.message = message
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  },
  components: {
    IndexAuth,
    IndexGuest
  }
}
</script>
