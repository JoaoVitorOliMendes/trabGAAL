function ex1Calc() {
    let ex1_field1 = document.getElementById('ex1_field1').value
    let ex1_field2 = document.getElementById('ex1_field2').value
    let ex1_field3 = document.getElementById('ex1_field3').value
    let ex1_field4 = document.getElementById('ex1_field4').value
    let ex1_field5 = document.getElementById('ex1_field5').value
    let ex1_field6 = document.getElementById('ex1_field6').value
    
    let ex1_resposta = document.getElementById('ex1_resposta')
    
    var answer = `
    \\[\\pi:\\left\\{\\begin{array}{ccc}
        x = ${ex1_field1} + ${ex1_field4}t \\\\
        y = ${ex1_field2} + ${ex1_field5}t \\\\
        z = ${ex1_field3} + ${ex1_field6}t
    \\end{array}\\right.
    \\]
    `

    ex1_resposta.innerText = answer
    MathJax.typeset()
}