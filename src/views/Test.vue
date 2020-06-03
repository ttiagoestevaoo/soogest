<template>
  <v-layout>
    <v-flex text-xs-center xs4 offset-xs4>
      <v-text-field label="What snack?" />
      <v-btn class="primary" >Test snack</v-btn>
      <Notification :message="snackName" :snack="snack"></Notification>

    </v-flex>
  </v-layout>
</template>

<script>

import Notification from '@/components/Notification.vue'

export default {
  data () {
    return {
      snackName: 'Teste',
      snack: true
    }
  },
  components: {
    Notification
  }
}

</script>
