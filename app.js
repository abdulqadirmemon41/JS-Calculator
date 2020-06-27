function getNumber(num){
    var result = document.getElementById('result');
    result.value += num;
}

function clearResult(){
    var result = document.getElementById('result');
    result.value = "";
}

function getResult(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
}

function percentage(){
    var result = document.getElementById('result');
    result.value = result.value/100;
}

function del(){
    var result = document.getElementById('result').value;
   document.getElementById('result').value = result.substring(0,result.length - 1);
}

function negOrPos(){
    var result = document.getElementById('result').value;
    if(Math.sign(result) === -1 || Math.sign(result) === 1){
        document.getElementById('result').value = result * -1;
    }
    
}