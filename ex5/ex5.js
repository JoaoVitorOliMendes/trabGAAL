var ex5_field1 = document.getElementById('ex5_field1')
var ex5_field2 = document.getElementById('ex5_field2')
var ex5_field3 = document.getElementById('ex5_field3')
var ex5_field4 = document.getElementById('ex5_field4')

var ex5_field5 = document.getElementById('ex5_field5')
var ex5_field6 = document.getElementById('ex5_field6')
var ex5_field7 = document.getElementById('ex5_field7')
var ex5_field8 = document.getElementById('ex5_field8')

function ex5Calc(){

    let ex5_resposta = document.getElementById('ex5_resposta')

    var ex5_field1Val = parseFloat(ex5_field1.value)
    var ex5_field2Val = parseFloat(ex5_field2.value)
    var ex5_field3Val = parseFloat(ex5_field3.value)
    var ex5_field4Val = parseFloat(ex5_field4.value)
    var ex5_field5Val = parseFloat(ex5_field5.value)
    var ex5_field6Val = parseFloat(ex5_field6.value)
    var ex5_field7Val = parseFloat(ex5_field7.value)
    var ex5_field8Val = parseFloat(ex5_field8.value)

    if(
        [ex5_field1Val, ex5_field2Val, ex5_field3Val, ex5_field4Val, ex5_field5Val, ex5_field6Val, ex5_field7Val, ex5_field8Val].every(value => {
            return !isNaN(value)
        })
    ){
        var n1 = [ex5_field1Val, ex5_field2Val, ex5_field3Val]
        var n2 = [ex5_field5Val, ex5_field6Val, ex5_field7Val]

        if(checkIfMultiple(n1,n2)){

            var p1 = [0, 0, 0]
            if(ex5_field3Val != 0){
                p1 = [0, 0, -1*(ex5_field4Val/ex5_field3Val)]
            }else if(ex5_field2Val != 0){
                p1 = [0, -1*(ex5_field4Val/ex5_field2Val), 0]
            }else if(ex5_field1Val != 0){
                p1 = [-1*(ex5_field4Val/ex5_field1Val), 0, 0]
            }
            var p2 = [0, 0, 0]
            if(ex5_field7Val != 0){
                p2 = [0, 0, -1*(ex5_field8Val/ex5_field7Val)]
            }else if(ex5_field6Val != 0){
                p2 = [0, -1*(ex5_field8Val/ex5_field6Val), 0]
            }else if(ex5_field5Val != 0){
                p2 = [-1*(ex5_field8Val/ex5_field5Val), 0, 0]
            }
    
            var p1p2 = subtractPoints(p1, p2)
            var pEscalar = produtoEscalar(p1p2, n2)
            var vAbs = valorAbs(n2)
            var vAbsSqrt = Math.sqrt(vAbs, 2)
            
            var resposta = '';

            if(isNaN(pEscalar/vAbsSqrt)){
                resposta = '0'
            }else if(Number.isInteger(pEscalar/vAbsSqrt)){
                resposta = pEscalar/vAbsSqrt
            }else{
                var numerador = `${pEscalar}`
                var denominador = `\\sqrt[2]${vAbs}`
                if(Number.isInteger(vAbsSqrt)){
                    denominador = vAbsSqrt
                }
                resposta = `\\frac{${numerador}}{${denominador}}`
            }
            ex5_resposta.innerHTML = `
                \\[
                    \\operatorname{dist}(\\pi_1, \\pi_2) = ${resposta}
                \\]
            `
            
            MathJax.typeset()
        }else{
            ex5_resposta.innerHTML = 'Os planos são concorrentes'
        }
    }else {
        ex5_resposta.innerHTML = 'Por favor digite números válidos'
    }
}

function validateInput(){
    var ex5_field1Val = parseFloat(ex5_field1.value)
    var ex5_field2Val = parseFloat(ex5_field2.value)
    var ex5_field3Val = parseFloat(ex5_field3.value)

    var ex5_field5Val = parseFloat(ex5_field5.value)
    var ex5_field6Val = parseFloat(ex5_field6.value)
    var ex5_field7Val = parseFloat(ex5_field7.value)

    if(
        [ex5_field1Val, ex5_field2Val, ex5_field3Val].every(value => {
            return value == 0
        })
    ){
        ex5_field4.value = 0
        ex5_field4.disabled = true
    }else {
        ex5_field4.disabled = false
    }
    if(
        [ex5_field5Val, ex5_field6Val, ex5_field7Val].every(value => {
            return value == 0
        })
    ){
        ex5_field8.value = 0
        ex5_field8.disabled = true
    }else {
        ex5_field8.disabled = false
    }
}

validateInput()