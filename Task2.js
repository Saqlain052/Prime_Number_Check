let input_number = Number(prompt("Enter a number to check it is prime or not:"));

function isPrime(input_number){

    if(input_number <= 1){
        return false;
    }
    if(input_number % 2 == 0 && input_number !== 2){
        return false;
    }
    for(let i=3; i <= Math.sqrt(input_number); i+=2){
        if(input_number % i === 0){
            return false;
           
        }
    }
    return true;
    
}

if(isPrime(input_number)){
    alert(`${input_number} is a prime number.`);
    
}else{
    alert(`${input_number} is not a prime number.`);
    
}

let count = 0;

for(let i = 1; i <= 1000; i++){
    if(isPrime(i)){
        document.write(i + '<br>');
        count++;
    }
}

document.write(`Total Prime Number between 1 and 1000 : ${count}`);