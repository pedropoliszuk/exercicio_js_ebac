const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelContato = document.getElementById('tel-contato')

    if (nomes.includes(inputNomeContato.value)) {
        alert (`O nome ${inputNomeContato.value} já foi adicionado`);
    } else if (numeros.includes(parseFloat(inputTelContato.value))) {
        alert (`O número de telefone ${inputTelContato.value} já foi adicionado`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputTelContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}