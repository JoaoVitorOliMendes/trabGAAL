function ex2Calc() {
    var ex2_field1 = document.getElementById('ex2_field1').value
    var ex2_field2 = document.getElementById('ex2_field2').value
    var ex2_field3 = document.getElementById('ex2_field3').value
    var ex2_field4 = document.getElementById('ex2_field4').value
    var ex2_field5 = document.getElementById('ex2_field5').value
    var ex2_field6 = document.getElementById('ex2_field6').value
    
    let ex2_resposta = document.getElementById('ex2_resposta')

    ex2_field1 = parseFloat(ex2_field1)
    ex2_field2 = parseFloat(ex2_field2)
    ex2_field3 = parseFloat(ex2_field3)
    ex2_field4 = parseFloat(ex2_field4)
    ex2_field5 = parseFloat(ex2_field5)
    ex2_field6 = parseFloat(ex2_field6)

    if(
        [ex2_field1, ex2_field2, ex2_field3, ex2_field4, ex2_field5, ex2_field6].every(value => {
            return !isNaN(value)
        })
    ){
        let d = -1 * ((ex2_field1*ex2_field4) + (ex2_field2*ex2_field5) + (ex2_field3*ex2_field6))
        // ex2_field1 = ex2_field1 == 0 ? '' : ((ex2_field1*ex2_field1) == 1 ? 'x' : ex2_field1 + 'x')
        // ex2_field2 = ex2_field2 == 0 ? '' : ((ex2_field2*ex2_field2) == 1 ? 'y' : ex2_field2 + 'y')
        // ex2_field3 = ex2_field3 == 0 ? '' : ((ex2_field3*ex2_field3) == 1 ? 'z' : ex2_field3 + 'z')
        // d = d == 0 ? '' : d

        // ex2_field2 = ex2_field1 == '' || ex2_field2 == '' ? ex2_field2 : ((ex2_field2[0] == '-') ? ex2_field2 : ' + '+ex2_field2)
        // ex2_field3 = ex2_field2 == '' || ex2_field3 == '' ? ex2_field3 : ((ex2_field3[0] == '-') ? ex2_field3 : ' + '+ex2_field3)
        ex2_resposta.innerHTML = `\\[\\pi: (${ex2_field1})x + (${ex2_field2})y + (${ex2_field3})z + (${d}) = 0\\]`
        MathJax.typeset()
    }else {
        ex2_resposta.innerHTML = 'Por favor digite números válidos'
    }
}