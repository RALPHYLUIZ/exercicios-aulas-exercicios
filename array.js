let nomes = [
    "Marie Curie",
    "Albert Einstein",
    "Ada Lovelace",
    "Charles Darwin",
    "Margaret Hamilton",
    "Stephen Hawking",
    "Katherine Johnson",
    "Nikola Tesla",
    "Mary Jackson",
    "Isaac Newton",
    "Dorothy Vaughan",
];

/** EXEMPLOS FUNDAMENTAIS DE MANIPULAÇÃO DE ARRAYS **/

//EXIBE O CONTEÚDO DE UM ARRAY: 
console.log('EXIBE O CONTEÚDO DE UM ARRAY:');
console.log(nomes);

//EXIBE O TAMANHO DE UM ARRAY: 
console.log('EXIBE O TAMANHO DE UM ARRAY: ' + nomes.length);


//ADICIONA UM ITEM NO INICIO DE UM ARRAY:
nomes.unshift("TESTE DE ADIÇÃO INICIO");
console.log(nomes);

//ADICIONA UM ITEM NO FIM DE UM ARRAY:
nomes.push("TESTE DE ADIÇÃO FIM");
console.log(nomes);

//REMOVE UM ITEM DO INICIO DE UM ARRAY: 
nomes.shift();
console.log(nomes);

//REMOVE UM ITEM DO FIM DE UM ARRAY:
nomes.pop();
console.log(nomes);

//REMOVE UM ITEM DE UM ARRAY PELA POSIÇÃO:
let pos = 1;//A PARTIR DA POSIÇÃO
let n = 1;//QUANTIDADE DE ITENS QUE SERÃO REMOVIDOS
nomes.splice(pos, n);
console.log(nomes);

let listaNomes;

function contarNomes(){
    document.querySelector('#totalNomes').innerHTML = nomes.length
}

function listar(){
    nomes.forEach(
        function(item){
            //console.log(indice + 'º NOME: ' + item);
            listaNomes += '<div id="nometeste">' + item + '</div>';
        }
    );

    document.querySelector('#listaNomes').innerHTML = listaNomes;
    listaNomes = "";
}

function remover(){
    //REMOVE O PRIMEIRO ELEMENTO DO ARRAY:
    nomes.shift();

    //REMOVE O ÚLTIMO ELEMENTO DO ARRAY:
    // nomes.pop();

    contarNomes();
    // document.getElementById('listaNomes').innerHTML = "";
    let element = document.getElementById("listaNomes");
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    listar();
}