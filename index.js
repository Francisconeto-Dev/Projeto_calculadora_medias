const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = prompt("Digite a nota minima");

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionalLinha(){  
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`);

    }
    else{
        atividade.push(inputNomeAtividade.value);
        notas.push(Number(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha+=`<td>${inputNotaAtividade.value}</td> `;
        linha+= `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado:imgReprovado}</td>`;
        linha+= `</tr>`;
    
        linhas += linha;
    
        form.reset()
    }
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
4
}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
  
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
   
}
function calculaMediaFinal(){
    let somaDasNotas = 0;
   
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
 
}