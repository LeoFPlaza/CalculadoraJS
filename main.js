let firstNumber = 0;
let lastNumber = 0;
let operador;
let result = document.getElementById("result");
let userName = "Usuario";//prompt("Nombre de usuario:"); 


result.innerHTML = lastNumber;

 console.log("==========================")
// while(userName !== "Usuario"){
//   userName = prompt("por favor ingresar un nombre de usuario valido")
// }



function operation (operation){
firstNumber = parseInt(lastNumber);
lastNumber = 0;
operador = operation;

  if( isNaN(firstNumber)  || firstNumber === undefined){
    console.log("err")
  }
  if (operador === "divide"|| operador === "add" || 
  operador === "subs" || operador === "times"){
    acButton();
  }
}

function equals(){
  console.log(operador);
  if(operador === "divide"){
    lastNumber = firstNumber / parseInt(lastNumber);
    result.innerHTML = lastNumber;
    return(lastNumber)
  }else  if(operador === "times"){
    lastNumber = firstNumber * parseInt(lastNumber);
    result.innerHTML = lastNumber;
    return(lastNumber)
  }else  if(operador === "add"){
    lastNumber = firstNumber + parseInt(lastNumber);
    result.innerHTML = lastNumber;
    return(lastNumber)
  }else  if(operador === "subs"){
    lastNumber = firstNumber - parseInt(lastNumber);
    result.innerHTML = lastNumber;
    return(lastNumber)
  }else{
    result.innerHTML = lastNumber;
    return(lastNumber)
  }
}


function concatNumber(numberClicked){
  //console.log(lastNumber);
  if(lastNumber === 0){
    lastNumber = numberClicked
    result.innerHTML = lastNumber;
  }else{
    lastNumber = "" + lastNumber + parseInt(numberClicked);
    result.innerHTML = lastNumber;
  }
  //console.log(parseInt(lastNumber));
  return(parseInt(lastNumber));
}


function acButton(){
  lastNumber = 0
  result.innerHTML = lastNumber;
  return(lastNumber)
}

