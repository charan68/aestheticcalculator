function display(value){
    document.getElementById('textarea').value += value;
}

function calculate(){
    let value = document.getElementById('textarea').value;
    let result = eval(value);
    document.getElementById('textarea').value = result;
}

function clr(){
    document.getElementById('textarea').value = "";
}