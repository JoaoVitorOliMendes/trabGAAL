function ex3Calc(){
    var ex3_field1 = document.getElementById('ex3_field1').value
    var ex3_field2 = document.getElementById('ex3_field2').value
    var ex3_field3 = document.getElementById('ex3_field3').value
    var ex3_field4 = document.getElementById('ex3_field4').value

    var ex3_field5 = document.getElementById('ex3_field5').value
    var ex3_field6 = document.getElementById('ex3_field6').value
    var ex3_field7 = document.getElementById('ex3_field7').value

    let ex3_resposta = document.getElementById('ex3_resposta')

    ex3_field1 = parseFloat(ex3_field1)
    ex3_field2 = parseFloat(ex3_field2)
    ex3_field3 = parseFloat(ex3_field3)
    ex3_field4 = parseFloat(ex3_field4)
    ex3_field5 = parseFloat(ex3_field5)
    ex3_field6 = parseFloat(ex3_field6)
    ex3_field7 = parseFloat(ex3_field7)

    if(
        [ex3_field1, ex3_field2, ex3_field3, ex3_field4, ex3_field5, ex3_field6, ex3_field7].every(value => {
            return !isNaN(value)
        })
    ){
        reta = null
    }else {
        ex3_resposta.innerHTML = 'Por favor digite números válidos'
    }
}

function validateInput(e){
    var ex3_field1 = document.getElementById('ex3_field1').value
    var ex3_field2 = document.getElementById('ex3_field2').value
    var ex3_field3 = document.getElementById('ex3_field3').value
    var ex3_field4 = document.getElementById('ex3_field4').value

    var ex3_field5 = document.getElementById('ex3_field5').value
    var ex3_field6 = document.getElementById('ex3_field6').value
    var ex3_field7 = document.getElementById('ex3_field7').value
}