function exClear(ex) {
    let ex_resposta = document.getElementById(`ex${ex}_resposta`)
    ex_resposta.innerHTML = ''
}

function valorAbs(val){
    return val.map((i) => i*i).reduce((total, current) => total + current, 0)
}

function produtoVetorial(a, b){
    return [a[1]*b[2] - a[2]*b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}

function checkIfMultiple(a, b){
    return a.map((i, j) => i / b[j]).every((val, i, arr) => val === arr[0])
}