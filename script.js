// Aguarda o HTML carregar completamente antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o formulário de contato pelo ID que você colocou no HTML
    const formulario = document.getElementById("formulario-contato");

    // Verifica se o formulário existe na página atual (evita erros em páginas que não têm formulário)
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            // Impede a página de recarregar ao clicar no botão enviar
            event.preventDefault();

            // Pega os valores digitados pelo usuário
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Validação simples (garante que nenhum campo foi enviado só com espaços)
            if (nome === "" || email === "" || telefone === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos do formulário.");
                return;
            }

            // Exibe uma mensagem de sucesso para o cliente
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.`);

            // Limpa o formulário após o envio
            formulario.reset();
        });
    }

    // --- BÔNUS: Efeito de clique suave para as categorias do Cardápio ---
    const linksCategorias = document.querySelectorAll('.categorias a[href^="#"]');
    
    linksCategorias.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const idAlvo = this.getAttribute('href');
            const secaoAlvo = document.querySelector(idAlvo);
            
            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});