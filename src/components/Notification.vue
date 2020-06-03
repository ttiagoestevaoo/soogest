<template>
    <v-snackbar
      v-model="snack"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
    {{ message }}
    <v-btn
      dark
      text
      @click="snack=false"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
export default {
  props: ['message'],
  data () {
      return {
          mode: '',
          timeout: 6000,
          x: 'right',
          y: 'top',
          color: 'success'
      }
  }
}
</script>