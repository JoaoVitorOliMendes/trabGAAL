var ex4_field1 = document.getElementById('ex4_field1')
var ex4_field2 = document.getElementById('ex4_field2')
var ex4_field3 = document.getElementById('ex4_field3')
var ex4_field4 = document.getElementById('ex4_field4')
var ex4_field5 = document.getElementById('ex4_field5')
var ex4_field6 = document.getElementById('ex4_field6')

var ex4_field7 = document.getElementById('ex4_field7')
var ex4_field8 = document.getElementById('ex4_field8')
var ex4_field9 = document.getElementById('ex4_field9')

function ex4Calc(){

    let ex4_resposta = document.getElementById('ex4_resposta')

    var ex4_field1Val = parseFloat(ex4_field1.value)
    var ex4_field2Val = parseFloat(ex4_field2.value)
    var ex4_field3Val = parseFloat(ex4_field3.value)
    var ex4_field4Val = parseFloat(ex4_field4.value)
    var ex4_field5Val = parseFloat(ex4_field5.value)
    var ex4_field6Val = parseFloat(ex4_field6.value)
    var ex4_field7Val = parseFloat(ex4_field7.value)
    var ex4_field8Val = parseFloat(ex4_field8.value)
    var ex4_field9Val = parseFloat(ex4_field9.value)

    if(
        [ex4_field1Val, ex4_field2Val, ex4_field3Val, ex4_field4Val, ex4_field5Val, ex4_field6Val, ex4_field7Val, ex4_field8Val, ex4_field9Val].every(value => {
            return !isNaN(value)
        })
    ){
        var p0 = [ex4_field7Val, ex4_field8Val, ex4_field9Val]
        var p1 = [ex4_field1Val, ex4_field3Val, ex4_field5Val]
        var v = [ex4_field2Val, ex4_field4Val, ex4_field6Val]
        var p1p0 = p0.map((i, j) => i - p1[j])

        var valorAbsProdEsc = valorAbs(produtoVetorial(v, p1p0))
        var valorAbsReta = valorAbs(v)
        var valorAbsProdEscSqrt = Math.sqrt(valorAbsProdEsc, 2)
        var valorAbsRetaSqrt = Math.sqrt(valorAbsReta, 2)

        var resposta = '';

        if(isNaN(valorAbsProdEscSqrt/valorAbsRetaSqrt)){
            resposta = '0'
        }else if(Number.isInteger(valorAbsProdEscSqrt/valorAbsRetaSqrt)){
            resposta = valorAbsProdEscSqrt/valorAbsRetaSqrt
        }else{
            var numerador = `\\sqrt[2]${valorAbsProdEsc}`
            var denominador = `\\sqrt[2]${valorAbsReta}`
            if(Number.isInteger(valorAbsProdEscSqrt)){
                numerador = valorAbsProdEscSqrt
            }
            if(Number.isInteger(valorAbsRetaSqrt)){
                denominador = valorAbsRetaSqrt
            }
            resposta = `\\frac{${numerador}}{${denominador}}`
        }
        ex4_resposta.innerHTML = `
            \\[
                \\operatorname{dist}(P_0, r) = ${resposta}
            \\]
        `
        
        MathJax.typeset()
    }else {
        ex4_resposta.innerHTML = 'Por favor digite números válidos'
    }
}