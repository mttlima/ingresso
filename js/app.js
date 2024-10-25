function comprar() {

// tipos de ingresso            // qtd
let tipoIngresso = document.getElementById('tipo-ingresso');
let quantidade = parseInt(document.getElementById('qtd').value);

if (quantidade <= 0) { 
    alert ('Digite um número maior do que 0');
    document.getElementById('qtd').value = '';
    return; 
}

    if (tipoIngresso.value == 'pista') {
    
    comprarPista(quantidade);

    }    else if(tipoIngresso.value == 'superior') {

        comprarSuperior(quantidade);

    }   else {

        comprarInferior(quantidade);

    }   document.getElementById('qtd').value = '';

}

//declarar qtd de ingressos nos setores


function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
        alert ('Quantidade indisponível para tipo pista');
   }    else {           
    
    //decrementar o valores dos ingressos na quantidade disponível
            qtdPista = qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista;         
            alert('Compra realizada com sucesso!');
   }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior) {
        alert ('Quantidade indisponivel para a parte superior');

    }   else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso');
    }

}

function comprarInferior(quantidade) {

    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior) {

        alert ('Quantidade indisponível para a parte inferior');

    }   else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}