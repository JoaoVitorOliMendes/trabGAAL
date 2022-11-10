function ex1Calc() {
    let ex1_field1 = document.getElementById('ex1_field1').value
    let ex1_field2 = document.getElementById('ex1_field2').value
    let ex1_field3 = document.getElementById('ex1_field3').value
    let ex1_field4 = document.getElementById('ex1_field4').value
    let ex1_field5 = document.getElementById('ex1_field5').value
    let ex1_field6 = document.getElementById('ex1_field6').value
    
    let ex1_resposta = document.getElementById('ex1_resposta')

    var answer = `
    \\(ax^2 + bx + c = 0\\)
    `

    ex1_resposta.innerText = answer
}

function exClear(ex) {
    let ex_resposta = document.getElementById(`ex${ex}_resposta`)
    ex_resposta.innerHTML = ''
}

function ex2Calc() {
    var ex2_field1 = document.getElementById('ex2_field1').value
    var ex2_field2 = document.getElementById('ex2_field2').value
    var ex2_field3 = document.getElementById('ex2_field3').value
    var ex2_field4 = document.getElementById('ex2_field4').value
    var ex2_field5 = document.getElementById('ex2_field5').value
    var ex2_field6 = document.getElementById('ex2_field6').value
    
    let ex2_resposta = document.getElementById('ex2_resposta')

    try {
        var ex2_field1 = parseFloat(ex2_field1)
        var ex2_field2 = parseFloat(ex2_field2)
        var ex2_field3 = parseFloat(ex2_field3)
        var ex2_field4 = parseFloat(ex2_field4)
        var ex2_field5 = parseFloat(ex2_field5)
        var ex2_field6 = parseFloat(ex2_field6)

        let d = -1 * ((ex2_field1*ex2_field4) + (ex2_field2*ex2_field5) + (ex2_field3*ex2_field6))

        ex2_resposta.innerHTML = `${ex2_field1}x + ${ex2_field2}y + ${ex2_field3}c + ${d}`
    } catch (error) {
        ex2_resposta.innerHTML = 'Por favor digite números válidos'
    }
}