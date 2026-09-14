document.addEventListener('DOMContentLoaded', () => {
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const produtos = document.querySelectorAll('.card-produto');
    const inputBusca = document.getElementById('busca');

    // Lógica de filtro por categoria (Masculina/Feminina)
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove classe ativa de todos
            botoesFiltro.forEach(b => b.classList.remove('active'));
            // Adiciona no clicado
            botao.classList.add('active');

            const filtro = botao.getAttribute('data-filter');

            produtos.forEach(produto => {
                if (filtro === 'todas' || produto.getAttribute('data-category') === filtro) {
                    produto.style.display = 'flex';
                } else {
                    produto.style.display = 'none';
                }
            });
        });
    });

    // Lógica de busca por texto (Nome do produto)
    inputBusca.addEventListener('input', (e) => {
        const termoBusca = e.target.value.toLowerCase();

        produtos.forEach(produto => {
            const nomeProduto = produto.querySelector('.nome-produto').textContent.toLowerCase();
            if (nomeProduto.includes(termoBusca)) {
                produto.style.display = 'flex';
            } else {
                produto.style.display = 'none';
            }
        });
    });
});