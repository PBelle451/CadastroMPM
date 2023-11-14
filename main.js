// script.js

function adicionarLinha() {
    // Captura os valores dos campos de entrada
    var descricao = document.getElementById('txtdescricao').value;
    var qtdVendasPeriodo = document.getElementById('txtqtdVendasPeriodo').value;
    var periodo = document.getElementById('datePeriodo').value;
    var precoVenda = document.getElementById('numberprecoVenda').value;
    var estimativaMax = document.getElementById('numberestimativaMax').value;

    // Referência à tabela
    var tabela = document.getElementById('minhaTabela');

    // Cria uma nova linha na tabela
    var novaLinha = tabela.insertRow(-1);

    // Insere células na nova linha
    var celulaDescricao = novaLinha.insertCell(0);
    var celulaPeriodo = novaLinha.insertCell(1);
    var celulaQtd = novaLinha.insertCell(2);
    var celulaPreco = novaLinha.insertCell(3);
    var celulaProjecao = novaLinha.insertCell(4);
    var celulaAcoes = novaLinha.insertCell(5);

    // Preenche as células com os valores capturados e aplica a cor
    celulaDescricao.innerHTML = '<span style="color: #663398;">' + descricao + '</span>';
    celulaPeriodo.innerHTML = '<span style="color: #663398;">' + periodo + '</span>';
    celulaQtd.innerHTML = '<span style="color: #663398;">' + qtdVendasPeriodo + '</span>';
    celulaPreco.innerHTML = '<span style="color: #663398;">R$ ' + precoVenda + '</span>';
    celulaProjecao.innerHTML = '';  // Aqui você pode adicionar a lógica para calcular a projeção
    celulaAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)">';
    novaLinha.classList.add('linhaTabela');

    
}

function excluirLinha(botaoLixeira) {
    // Obtém a referência à linha que contém o botão de lixeira clicado
    var linha = botaoLixeira.closest('tr');

    // Remove a linha da tabela
    linha.remove();
}

//Script para o icone exibir uma tabela
document.addEventListener('DOMContentLoaded', function () {
    var detalheIcon = document.querySelector('.detalhe');
    var explicacaoBox = document.getElementById('explicacaoBox');

    detalheIcon.addEventListener('click', function () {
        // Alternar a visibilidade da caixa de explicação
        if (explicacaoBox.style.display === 'none' || explicacaoBox.style.display === '') {
            explicacaoBox.style.display = 'block';
        } else {
            explicacaoBox.style.display = 'none';
        }
    });

    // Fechar a caixa de explicação se clicar fora dela
    document.addEventListener('click', function (event) {
        if (!explicacaoBox.contains(event.target) && event.target !== detalheIcon) {
            explicacaoBox.style.display = 'none';
        }
    });
});
