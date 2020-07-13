  function input(Id){
      document.getElementById("res").innerHTML += document.getElementById(Id).innerHTML;
 
  }
function clearInput() {
        document.getElementById("res").innerHTML = "";
    }
function equalizeInput() {
    var i, operator;
    var operand1="";
    var operand2="";
    var index= 0;
    var operators=['+', '-', '*', '/'];
    var input = document.getElementById("res").innerHTML;
    var inputlength = input.length;
   
     
    for(i=0; i<input.length; i++) {
        
        if(!(operators.includes(input[i])) && index==0 ){
            operand1 += input[i];
        }
        else if (operators.includes(input[i])) {
            operator = input[i];
            index= 1;
        }
        else if(!(operators.includes(input[i])) && index==1 ){
            operand2 += input[i];
        }
    }

    var number1 = parseInt(operand1,2);
    var number2 = parseInt(operand2,2);

    
    if (operator == "+") {
        var sum = number2 + number1;
        var result = sum.toString(2);
        document.getElementById("res").innerHTML = result;
    }
    else if (operator == "-") {
        var sum = number2 - number1;
        var result = sum.toString(2);
        document.getElementById("res").innerHTML = result;
    }
    else if (operator == "*") {
        var sum = number2 * number1;
        var result = sum.toString(2);
        document.getElementById("res").innerHTML = result;
    }
    else if (operator == "/") {
        var sum = number1 / number1;
        var result = sum.toString(2);
        document.getElementById("res").innerHTML = result;
    }

}