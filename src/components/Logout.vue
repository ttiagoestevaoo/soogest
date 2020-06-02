<template>
    <v-btn text small v-on:click="logout" >
        Logout
    </v-btn>
</template>
<script>
export default {
    methods: {
        logout(event){
            this.$store.dispatch('forgetToken')
        }
    }
}
</script>