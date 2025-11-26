document.addEventListener('DOMContentLoaded', function() {
    // 1. Obter o elemento do modal pelo id
    var modal = document.getElementById("loginModal");

    // 2. Botão que abre o modal
    var btn = document.getElementById("openModalBtn");

    // 3. Botão de fechar, agora com classe 'modal-close-btn'
    var span = document.getElementsByClassName("modal-close-btn")[0];

    // 4. Ao clicar no botão, abre o modal
    btn.onclick = function() {
        modal.style.display = "flex"; // Mantém o flex para centralizar
    }

    // 5. Ao clicar no botão fechar, fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 6. Fecha o modal se clicar fora do conteúdo modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
