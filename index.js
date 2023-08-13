
// display

function display(num){
    output.value +=num;

}

function clearAll(){
    output.value="";
}

function removeLast(){
   currentExpression=output.value;
   output.value=currentExpression.slice(0,-1)
}

function evaluateExpression(){
    output.value=eval(output.value)
}