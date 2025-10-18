function incluir(incluir){
    var resultado = document.querySelector('p')
    if(Number(resultado.innerHTML)===0){
        resultado.innerHTML = incluir
    }else{
        resultado.innerHTML = resultado.innerHTML+incluir
    }
}

function limpar(){
    var resultado = document.querySelector('p')
    resultado.innerHTML = 0
}

function limparUltimo(){
    var resultado = document.querySelector('p')
    if(resultado.innerHTML.length === 1){
        resultado.innerHTML = 0
    }else{
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
}

function igual(){
    var resultado = document.querySelector('p')
    resultado.innerHTML = eval(resultado.innerHTML)
}