<template>
  <div class="index">
    <div class="principal">
      <div class="des">
        <h3>Isso e uma descrição </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book
        </p>

      </div>
      <div class="container" >
          <a class="links" id="paracadastro"></a>
          <a class="links" id="paralogin"></a>
          <div class="content">
            <!--FORMULÁRIO DE LOGIN-->
            <Login> </Login>
            <Register> </Register>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'index',
  components: {
    Login,
    Register
  }
}
</script>
