<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Animated Login &amp; Register Form - Modal</title>
  <link rel="stylesheet" href="login.css">
  <link rel="stylesheet" href="login-modal.css"> 
</head>
<body>
  <button id="openModalBtn" class="open-modal">Abrir Login/Cadastro</button>

  <div id="loginModal" class="modal">
    <div class="modal-container">
      <span class="modal-close-btn">&times;</span>

      <div class="modal-content-box container">
        <div class="curved-shape"></div>
        <div class="curved-shape2"></div>

        <!-- Login -->
        <div class="modal-form-box Login">    
          <h2 class="animation" style="--D:0; --S:21">Login</h2>
          <form action="#">
            <div class="modal-input-box animation" style="--D:1; --S:22">
              <input type="text" required>
              <label>Username</label>
              <box-icon type='solid' name='user' color="gray"></box-icon>
            </div>

            <div class="modal-input-box animation" style="--D:2; --S:23">
              <input type="password" required>
              <label>Senha</label>
              <box-icon name='lock-alt' type='solid' color="gray"></box-icon>
            </div>

            <div class="modal-input-box animation" style="--D:3; --S:24">
              <button class="modal-btn" type="submit">Login</button>
            </div>

            <div class="modal-regi-link animation" style="--D:4; --S:25">
              <p>Não tem uma conta? <br> <a href="#" class="SignUpLink">Cadastre-se</a></p>
            </div>
          </form>
        </div>

        <!-- Info Login -->
        <div class="modal-info-content Login">
          <h2 class="animation" style="--D:0; --S:20">BEM VINDO DE VOLTA!</h2>
          <p class="animation" style="--D:1; --S:21">Estamos felizes de ter você com a gente novamente. Se precisar de alguma coisa, estamos aqui para ajudar.</p>
        </div>

        <!-- Cadastro -->
        <div class="modal-form-box Register">
          <h2 class="animation" style="--li:17; --S:0">Cadastre-se</h2>
          <form action="#">
            <div class="modal-input-box animation" style="--li:18; --S:1">
              <input type="text" required>
              <label>Username</label>
              <box-icon type='solid' name='user' color="gray"></box-icon>
            </div>

            <div class="modal-input-box animation" style="--li:19; --S:2">
              <input type="email" required>
              <label>Email</label>
              <box-icon name='envelope' type='solid' color="gray"></box-icon>
            </div>

            <div class="modal-input-box animation" style="--li:19; --S:3">
              <input type="password" required>
              <label>Senha</label>
              <box-icon name='lock-alt' type='solid' color="gray"></box-icon>
            </div>

            <div class="modal-input-box animation" style="--li:20; --S:4">
              <button class="modal-btn" type="submit">Registre-se</button>
            </div>

            <div class="modal-regi-link animation" style="--li:21; --S:5">
              <p>Já tem um Perfil Eco?<br> <a href="#" class="SignInLink">Conecte-se</a></p>
            </div>
          </form>
        </div>

        <!-- Info Cadastro -->
        <div class="info-content Register">
          <h2 class="animation" style="--li:17; --S:0">BEM VINDO!</h2>
          <p class="animation" style="--li:18; --S:1">É um prazer ter você aqui. Se precisar de ajuda, sinta-se à vontade para entrar em contato.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="index.js"></script>
  <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
  <script src="./script.js"></script>
  <script src="./modal.js"></script>

</body>
</html>
