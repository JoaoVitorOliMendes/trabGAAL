var ex6_field1 = document.getElementById('ex6_field1')
var ex6_field2 = document.getElementById('ex6_field2')
var ex6_field3 = document.getElementById('ex6_field3')
var ex6_field4 = document.getElementById('ex6_field4')
var ex6_field5 = document.getElementById('ex6_field5')
var ex6_field6 = document.getElementById('ex6_field6')
var ex6_field7 = document.getElementById('ex6_field7')
var ex6_field8 = document.getElementById('ex6_field8')
var ex6_field9 = document.getElementById('ex6_field9')
var ex6_field10 = document.getElementById('ex6_field10')
var ex6_field11 = document.getElementById('ex6_field11')
var ex6_field12 = document.getElementById('ex6_field12')

function ex6Calc(){

    let ex6_resposta = document.getElementById('ex6_resposta')

    var ex6_field1Val = parseFloat(ex6_field1.value)
    var ex6_field2Val = parseFloat(ex6_field2.value)
    var ex6_field3Val = parseFloat(ex6_field3.value)
    var ex6_field4Val = parseFloat(ex6_field4.value)
    var ex6_field5Val = parseFloat(ex6_field5.value)
    var ex6_field6Val = parseFloat(ex6_field6.value)
    var ex6_field7Val = parseFloat(ex6_field7.value)
    var ex6_field8Val = parseFloat(ex6_field8.value)
    var ex6_field9Val = parseFloat(ex6_field9.value)
    var ex6_field10Val = parseFloat(ex6_field10.value)
    var ex6_field11Val = parseFloat(ex6_field11.value)
    var ex6_field12Val = parseFloat(ex6_field12.value)

    if(
        [ex6_field1Val, ex6_field2Val, ex6_field3Val, ex6_field4Val, ex6_field5Val, ex6_field6Val, ex6_field7Val, ex6_field8Val, ex6_field9Val, ex6_field10Val, ex6_field11Val, ex6_field12Val].every(value => {
            return !isNaN(value)
        })
    ){
        var v1 = [ex6_field2Val, ex6_field4Val, ex6_field6Val]
        var v2 = [ex6_field8Val, ex6_field10Val, ex6_field12Val]
        var p1 = [ex6_field1Val, ex6_field3Val, ex6_field5Val]
        var p2 = [ex6_field7Val, ex6_field9Val, ex6_field11Val]
        var p1p2 = subtractPoints(p1, p2)

        if(checkIfMultiple(v1, v2)){
            var valorAbsProdVet = valorAbs(produtoVetorial(v2, p1p2))
            var valorAbsReta = valorAbs(v2)
            var valorAbsProdVetSqrt = Math.sqrt(valorAbsProdVet, 2)
            var valorAbsRetaSqrt = Math.sqrt(valorAbsReta, 2)

            var resposta = '';

            if(isNaN(valorAbsProdVetSqrt/valorAbsRetaSqrt)){
                resposta = '0'
            }else if(Number.isInteger(valorAbsProdVetSqrt/valorAbsRetaSqrt)){
                resposta = valorAbsProdVetSqrt/valorAbsRetaSqrt
            }else{
                var numerador = `\\sqrt[2]${valorAbsProdVet}`
                var denominador = `\\sqrt[2]${valorAbsReta}`
                if(Number.isInteger(valorAbsProdVetSqrt)){
                    numerador = valorAbsProdVetSqrt
                }
                if(Number.isInteger(valorAbsRetaSqrt)){
                    denominador = valorAbsRetaSqrt
                }
                resposta = `\\frac{${numerador}}{${denominador}}`
            }
            ex6_resposta.innerHTML = `
                \\[
                    \\operatorname{dist}(P_0, r) = ${resposta}
                \\]
            `
        }else{
            var valorAbsProdVet = produtoVetorial(v1, v2)
            var prodMisto = Math.abs(produtoEscalar(p1p2, valorAbsProdVet))
            var valorAbsReta = valorAbs(valorAbsProdVet)
            var valorAbsRetaSqrt = Math.sqrt(valorAbsReta, 2)

            if(isNaN(prodMisto/valorAbsReta)){
                resposta = '0'
            }else if(Number.isInteger(prodMisto/valorAbsReta)){
                resposta = prodMisto/valorAbsReta
            }else{
                var numerador = `${prodMisto}`
                var denominador = `\\sqrt[2]${valorAbsReta}`
                if(Number.isInteger(valorAbsRetaSqrt)){
                    denominador = valorAbsRetaSqrt
                }
                resposta = `\\frac{${numerador}}{${denominador}}`
            }
            ex6_resposta.innerHTML = `
                \\[
                    \\operatorname{dist}(P_0, r) = ${resposta}
                \\]
            `
        }
            
        MathJax.typeset()
    }else {
        ex6_resposta.innerHTML = 'Por favor digite números válidos'
    }
}