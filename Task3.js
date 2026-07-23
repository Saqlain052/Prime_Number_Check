let input_number = Number(prompt("Enter a number to check prime or not :"));

// Sieve of Eratosthenes Function
function generatePrime(limit) {

    let isPrime = [];

    // Makes every number true
for (let i = 0; i <= limit; i++) {
    isPrime[i] = true;
    }

isPrime[0] = false;
isPrime[1] = false;

    // Sieve Logic
for (let i = 2; i <= Math.sqrt(limit); i++) {
if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;}

        }
    }

    return isPrime;
}

// Make Sieve till User input_number
let isPrime = generatePrime(input_number);

// Prime check
if (isPrime[input_number]) {
    alert(input_number + " is a Prime Number.");
} else {
    alert(input_number + " is NOT a Prime Number.");
}


// Find Prime Number between 1 to 1000

let prime_1_to_1000 = generatePrime(1000);

let count = 0;


for (let i = 2; i <= 1000; i++) {

    if (prime_1_to_1000[i]) {
        document.write(i + "<br>");
        count++;
    }

}

document.write("<br>Total Prime Numbers between 1 and 1000 = " + count + "</b>");