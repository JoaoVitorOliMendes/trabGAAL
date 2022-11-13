var ex3_field1 = document.getElementById('ex3_field1')
var ex3_field2 = document.getElementById('ex3_field2')
var ex3_field3 = document.getElementById('ex3_field3')
var ex3_field4 = document.getElementById('ex3_field4')

var ex3_field5 = document.getElementById('ex3_field5')
var ex3_field6 = document.getElementById('ex3_field6')
var ex3_field7 = document.getElementById('ex3_field7')

function ex3Calc(){

    let ex3_resposta = document.getElementById('ex3_resposta')

    var ex3_field1Val = parseFloat(ex3_field1.value)
    var ex3_field2Val = parseFloat(ex3_field2.value)
    var ex3_field3Val = parseFloat(ex3_field3.value)
    var ex3_field4Val = parseFloat(ex3_field4.value)
    var ex3_field5Val = parseFloat(ex3_field5.value)
    var ex3_field6Val = parseFloat(ex3_field6.value)
    var ex3_field7Val = parseFloat(ex3_field7.value)

    if(
        [ex3_field1Val, ex3_field2Val, ex3_field3Val, ex3_field4Val, ex3_field5Val, ex3_field6Val, ex3_field7Val].every(value => {
            return !isNaN(value)
        })
    ){
        var p1 = [0, 0, 0]
        if(ex3_field3Val != 0){
            p1 = [0, 0, -1*(ex3_field4Val/ex3_field3Val)]
        }else if(ex3_field2Val != 0){
            p1 = [0, -1*(ex3_field4Val/ex3_field2Val), 0]
        }else if(ex3_field1Val != 0){
            p1 = [-1*(ex3_field4Val/ex1_field1Val), 0, 0]
        }
        var n = [ex3_field1Val, ex3_field2Val, ex3_field3Val]
        var p0 = [ex3_field5Val, ex3_field6Val, ex3_field7Val]
        var p1p0 = p0.map((i, j) => i - p1[j])

        var pEscalar = Math.abs(p1p0.map((i, j) => i*n[j]).reduce((total, current) => total + current, 0))
        var vAbs = valorAbs(n)
        var vAbsSqrt = Math.sqrt(vAbs)

        var resposta = '';
        
        if(isNaN(pEscalar/vAbsSqrt)){
            resposta = '0'
        }else if(Number.isInteger(pEscalar/vAbsSqrt)){
            resposta = pEscalar/vAbsSqrt
        }else{
            if(Number.isInteger(vAbsSqrt)){
                resposta = `\\frac{${pEscalar}}{${vAbsSqrt}}`
            }else {
                resposta = `\\frac{${pEscalar}}{\\sqrt[2]${vAbs}}`
            }
        }
        ex3_resposta.innerHTML = `
            \\[
                \\operatorname{dist}(P_0, \\pi) = ${resposta}
            \\]
        `
        MathJax.typeset()
    }else {
        ex3_resposta.innerHTML = 'Por favor digite números válidos'
    }
}

function validateInput(){
    ex3_field1Val = parseFloat(ex3_field1.value)
    ex3_field2Val = parseFloat(ex3_field2.value)
    ex3_field3Val = parseFloat(ex3_field3.value)
    ex3_field4Val = parseFloat(ex3_field4.value)

    if(
        [ex3_field1Val, ex3_field2Val, ex3_field3Val].every(value => {
            return value == 0
        })
    ){
        ex3_field4.value = 0
        ex3_field4.disabled = true
    }else {
        ex3_field4.disabled = false
    }
}

validateInput()