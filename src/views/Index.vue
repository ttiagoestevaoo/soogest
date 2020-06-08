<template>
    <div id="index">
        <IndexAuth v-if="loggedIn"></IndexAuth>
        <IndexGuest v-else></IndexGuest>

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
