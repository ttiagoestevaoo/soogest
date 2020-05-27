<template>

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
        <div id="login">
          <form method="post" action=""> 
            <h1>Login</h1> 
            <p> 
              <label for="email_login">E-mail</label>
              <input id="email_login" name="email_login" required="required" type="text" placeholder="Email@email.com"/>
            </p>
            
            <p> 
              <label for="senha_login">Senha</label>
              <input id="senha_login" name="senha_login" required="required" type="password" placeholder="*******" /> 
            </p>
            
            <p> 
              <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
              <label for="manterlogado">Manter-me logado</label>
            </p>
            
            <p> 
              <input type="submit" value="Logar" /> 
            </p>
            
            <p class="link">
              Ainda não tem conta?
              <a href="#paracadastro">Cadastre-se</a>
            </p>
          </form>
        </div>

        <!--FORMULÁRIO DE CADASTRO-->
        <div id="cadastro">
          <form method="post" action=""> 
            <h1>Cadastro</h1> 
            
            <p> 
              <label for="nome_cad">Nome</label>
              <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Emerson Silvestre" />
            </p>
            
            <p> 
              <label for="email_cad">E-mail</label>
              <input id="email_cad" name="email_cad" required="required" type="email" placeholder="Email@email.com"/> 
            </p>
            
            <p> 
              <label for="senha_cad">Senha</label>
              <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="********"/>
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
      </div>
    
  </div>

</div>
  
</template>
