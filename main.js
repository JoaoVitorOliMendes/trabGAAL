function exClear(ex) {
    let ex_resposta = document.getElementById(`ex${ex}_resposta`)

    switch(ex){
        case 1: ex_resposta.innerHTML = ` \\[
                \\pi:\\left\\{\\begin{array}{ccc}
                x = x_0 + at \\\\
                y = y_0 + bt \\\\
                z = z_0 + ct
                \\end{array}\\right.
            \\]
        `
        case 2: ex_resposta.innerHTML = `\\(\\pi: ax + by + cz + d = 0\\)`
        case 3: ex_resposta.innerHTML = `\\(\\operatorname{dist}(P_0, \\pi) = x\\)`
        case 4: ex_resposta.innerHTML = `\\(\\operatorname{dist}(P_0, r) = x\\)`
        case 5: ex_resposta.innerHTML = `\\(\\operatorname{dist}(\\pi_1, \\pi_2) = x\\)`
        case 6: ex_resposta.innerHTML = `\\(\\operatorname{dist}(P_0, r) = x\\)`
    }
    MathJax.typeset()
}

function valorAbs(val){
    return val.map((i) => i*i).reduce((total, current) => total + current, 0)
}

function produtoVetorial(a, b){
    return [a[1]*b[2] - a[2]*b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}

function produtoEscalar(a, b){
    return Math.abs(a.map((i, j) => i*b[j]).reduce((total, current) => total + current, 0))
}

function checkIfMultiple(a, b){
    return a.map((i, j) => i / b[j]).every((val, i, arr) => val === arr[0])
}

function subtractPoints(a, b){
    return a.map((i, j) => i - b[j])
}