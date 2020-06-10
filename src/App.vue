<template>
  <v-app>
    <router-view/>
    <Notification :snackbar="snackbar"></Notification>

  </v-app>
</template>

<script>

import Notification from '@/components/Notification.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['snackbar'])
  },
  components: {
    Notification
  }
}

</script>

<style lang="scss">
#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
}
/* esconde as ancoras da tela */
a.links{
  display: none;
}
/* content que contem os formulários */
.content{
  width: 300px;
  margin: 0px auto;
  position: relative;
}
/* formatando o cabeçalho dos formulários */
h1{
  font-size: 48px;
  color: #066a75;
  padding: 10px 0;
  font-family: Arial,sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}
h1:after{
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%);
}
p:first-child{
  margin: 0px;
}
label{
  color: #405c60;
  position: relative;
}
input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #bebcbc;
  font-style: italic;
}
input, .selectProject {
  outline: none;
}
input:not([type="checkbox"]), .selectProject{
  width: 95%;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid #b2b2b2;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}
/*estilo do botão submit */
input[type="submit"]{
  width: 100%!important;
  cursor: pointer;
  background: #3d9db3;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  text-shadow: 0 1px 1px #333;
  transition: all 0.2s linear;
}
input[type="submit"]:hover{
  background: #4ab3c6;
}
/*marcando os links para mudar de um formulário para outro */
.link{
  position: absolute;
  color: #7f7c7c;
  left: 0px;
  height: 20px;
  width: 80%;
  padding: 17px 30px 20px 30px;
  font-size: 12px;
  text-align: center;
}
.principal{
    width: 92%;
    height: 460px;
    background-color: #0a0a0a;
    margin: auto;
    margin-top: 40px;
    max-width: 1020px;
}

.link a {
  font-weight: bold;
  background: #f7f8f1;
  padding: 6px;
  color: rgb(29, 162, 193);
  margin-left: 10px;
  border: 1px solid #fdfdfc;
  transition: all 0.4s  linear;
}
.des{
    float: left;
    margin-right: 625px;
    color: white;
    margin-left: 30px;
    margin-top: 15px;
}
.link a:hover {
  color: #39bfd7;
  background: #f7f7f7;
  border: 1px solid #4ab3c6;
}
/* estilos para para ambos os formulários */
#cadastro,
#login{
  position: absolute;
  padding: 18px 6% 60px 6%;
  background:white;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  border: 1px solid black;
  margin-top: -15px;
  margin-right: -378px;
  margin-left: 382px;
}
#paracadastro:target ~ .content #cadastro,
#paralogin:target ~ .content #login{
  z-index: 2;
  animation-name: fadeInLeft;
  animation-delay: .1s;
}
#registro:target ~ .content #login,
#paralogin:target ~ .content #cadastro{
  animation-name: fadeOutLeft;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
