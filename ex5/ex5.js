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
            var resposta = '';

            ex5_resposta.innerHTML = `
                \\[
                    \\operatorname{dist}(P_0, r) = ${resposta}
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