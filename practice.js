// Practicing JS 

const isPrime = int => {
let isPrime = true;
  if(int === 1) {
    return '1 is not prime nor composite number'
} else if (int > 1) { 
    for(let i = 2; i < int; i++) {
  if(int % i === 0) {
    isPrime = false;
}

} if(isPrime) {
    return `${int} is a prime number`;
} else {
    return `${int} is not a prime number`;
}

}
}



console.log(isPrime(1)); 