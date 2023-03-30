const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("btn");
const result = document.getElementById("result");

function Prime(num){
    if ( num <= 100  ) {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
             result.innerHTML =(num + " is not prime");
             break;
        }else{
            result.innerHTML = (num + " is prime");
        }
       } 
    }  else {
        result.innerHTML = (num + " is greater than 100");
      }
    }
    

checkBtn.addEventListener('click', function() {
  const num1 = parseInt(numberInput.value);
    if (Prime( num1)) {
      result.textContent = ( num1  + " is a prime number.");
    } else if (Prime == "false"( num1)) {
      result.textContent = ( num1 +  " is not a prime number.");
    }
  });