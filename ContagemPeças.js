/* ----- SISTEMA DE CADASTRO DE PEÇAS ----- */

// LISTA DAS PEÇAS
let ListaDePecas = [
    {NomePeca: 'Processador', PesoPeca: 120},
    {NomePeca: 'Memória RAM', PesoPeca: 40},
    {NomePeca: 'Gabinite', PesoPeca: 350},
    {NomePeca: 'Placa Mãe', PesoPeca: 105},
    {NomePeca: 'Placa de Vídeo', PesoPeca: 110},
    {NomePeca: 'Fonte de Alimentação', PesoPeca: 430},
    {NomePeca: 'HD', PesoPeca: 70},
    {NomePeca: 'Monitor', PesoPeca: 880},
    {NomePeca: 'Teclado', PesoPeca: 460}
]

// VARIÁVEL - NÚMERO/QUANTIDADE DE ITENS
let QuantDeItens = ListaDePecas.length;

if (QuantDeItens > 10){
    console.log('!? LIMITE EXCEDIDO ?! - SOMENTE 10 PEÇAS PODEM SER CADASTRADAS')
}else{
// ARGUMENTANDO - CONTADOR - LISTA DE PEÇAS
for(let contador = 0; contador < QuantDeItens; contador++){
    let NomePeca = ListaDePecas[contador].NomePeca
    let PesoPeca = ListaDePecas[contador].PesoPeca
    
//VARIÁVEL PARA LISTAR AS PEÇAS E PESO
    //console.log(`PEÇA: ${NomePeca}
//PESO: ${PesoPeca}G
//`)

// VALIDAÇÕES
if (NomePeca.length < 3){
    console.log(`A PEÇA [${NomePeca}] NÃO PODE SER CADASTRADA, POIS POSSUI MENOS QUE 3 CARACTERES!`)
}else{
    if(PesoPeca < 100){
        console.log(`A PEÇA [${NomePeca}] - NÃO PODE SER CADASTRADA, POIS TEM O PESO DE [${PesoPeca}G] E NÃO É SUFICIENTE!`)
    }
}
}
}