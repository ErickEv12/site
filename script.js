// Seleciona o container do modal (com as classes atualizadas)
const container = document.querySelector('.modal-content-box.container');

// Seleciona os links para trocar os formulários
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

// Ao clicar em "Cadastre-se" ativa o formulário de registro
RegisterLink.addEventListener('click', (e) => {
    e.preventDefault(); // previne o comportamento padrão do link
    container.classList.add('active');
});

// Ao clicar em "Conecte-se" volta para o formulário de login
LoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
});







// Simulação simples de login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");
    const salvarBtn = document.getElementById("salvarBtn");
  
    // LOGIN
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
  
        if (user && pass) {
          localStorage.setItem("logado", "true");
          window.location.href = "perfil.html";
        } else {
          alert("Preencha todos os campos!");
        }
      });
    }
  
    // PERFIL — SALVAR DADOS
    if (salvarBtn) {
      salvarBtn.addEventListener("click", () => {
        const perfilData = {
          nome: document.getElementById("nome").value,
          bio: document.getElementById("bio").value,
          sobre: document.getElementById("sobre").value,
          habilidades: document.getElementById("habilidades").value,
          projetos: document.getElementById("projetos").value,
        };
        localStorage.setItem("perfil", JSON.stringify(perfilData));
        alert("Perfil salvo com sucesso!");
      });
  
      // Restaurar dados salvos
      const dadosSalvos = JSON.parse(localStorage.getItem("perfil"));
      if (dadosSalvos) {
        document.getElementById("nome").value = dadosSalvos.nome || "";
        document.getElementById("bio").value = dadosSalvos.bio || "";
        document.getElementById("sobre").value = dadosSalvos.sobre || "";
        document.getElementById("habilidades").value = dadosSalvos.habilidades || "";
        document.getElementById("projetos").value = dadosSalvos.projetos || "";
      }
    }
  
    // LOGOUT
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("logado");
        window.location.href = "index.html";
      });
    }
  
    // Bloqueio de acesso direto
    if (window.location.pathname.includes("perfil.html") && !localStorage.getItem("logado")) {
      window.location.href = "index.html";
    }
  });
  
