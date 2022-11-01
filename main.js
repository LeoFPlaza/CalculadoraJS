let firstNumber = 0;
let lastNumber = 0;
let result = document.getElementById("result");
let userName = prompt("Nombre de usuario:"); 


result.innerHTML = lastNumber;

 console.log("==========================")
while(userName !== "Usuario"){
  userName = prompt("por favor ingresar un nombre de usuario valido")
}



function operation (){
let numberA = parseInt(lastNumber);
let numberB = 0
  if( isNaN(numberA)  || numberA === undefined){
    console.log("err")
  }else if (operador === "divide"){
    acButton();
    numberB = parseInt(lastNumber);
      result = numberA / numberB;
      console.log = result
  }
}


function concatNumber(numberClicked){
  console.log(lastNumber);
  if(lastNumber === 0){
    lastNumber = numberClicked
    result.innerHTML = lastNumber;
  }else{
    lastNumber = "" + lastNumber + parseInt(numberClicked);
    result.innerHTML = lastNumber;
  }
  console.log(parseInt(lastNumber));
  return(parseInt(lastNumber));
}


function acButton(){
  lastNumber = 0
  result.innerHTML = lastNumber;
  return(lastNumber)
}

