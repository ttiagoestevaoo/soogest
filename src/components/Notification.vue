<template>
  <div id="notification">
    <v-snackbar
      v-model="snackbar.showing"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
    {{ snackbar.text }}
    <v-btn
      dark
      text
      @click="snackbar.showing=false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'notification',
  props: ['snackbar'],
  data () {
    return {
      mode: '',
      timeout: 10000,
      x: 'right',
      y: 'top',
      color: 'success'
    }
  }
}
</script>
