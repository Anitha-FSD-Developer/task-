//program using anonymos&iife function
//a) .print odd number using anonymous&iife function?

//ANONYMOUS FUNCTION

//IIFE FUNCTION
var number=[1,2,3,4,5,6,7,8,9,10];
(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] %2!== 0){
            console.log(arr[i]);
        }
    }
})(number);

//b) convert string title caps using anonymous fuction

var stringsArray=["apple","orange","staberry"];
var titleCapsArray= stringsArray.map(function(str){
    return str.charAt(0).toUpperCase()+str.slice(1);

});
console.log(titleCapsArray);

//using IIFE function
var stringsArray=["apple","orange","staberry"];
var titleCapsArray= stringsArray.map(function(str){
    return str.charAt(0).toUpperCase()+str.slice(1);

})(stringsArray);
console.log(titleCapsArray);

//c)sum of all the numbers in array using anonymous fuction
var numbersArray=[1,2,3,4,5];
var sum=(function(arr){
    var total =0;
    for(var i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
})(numbersArray);
console.log(sum);

//using IIFE fuctions
var numbersArray=[1,2,3,4,5];
var sum=function(arr){
    var total =0;
    for(var i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}(numbersArray);
console.log(sum(numbersArray));

//d)Return all the prime numbers in an anonmyos
const primeNumber =(limit)=>{
    const prime=[];
    for(let num=2;num<=limit;num++){
        let isPrime=true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if(num%i===0){
                isPrime=false;
                break;
            }
            
        }
        if(isPrime){
            prime.push(num);
        }
    }
    return prime;
}
        
const limit=50;
console.log("prime number up to",limit,"are:",primeNumbers(limit));

//using iife fuction
const primeNumbers = ((limit) => {
    const primes = [];
  
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
  
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(num);
      }
    }
  
    return primes;
  })(50);
  
  console.log("Prime numbers up to 50 are:", primeNumbers) ;

    //e)Return all the palindromes in an array using anomyous 

   const findPalindromes = (arr) => {
    return arr.filter(word => {
      const reversedWord = word.split('').reverse().join('');
      return word === reversedWord;
    });
  };
  
  const words = ["level", "radar", "hello", "world", "madam"];
  constpalindromes  = findPalindromes(words);
  
  console.log("Palindromes in the array are:", palindromes);

  //Return all the palindromes in an array
  

   const palindromes = ((arr) => {
    return arr.filter(word => {
      const reversedWord = word.split('').reverse().join('');
      return word === reversedWord;
    });
  })(["level", "radar", "hello", "world", "madam"]);
  
  console.log("Palindromes in the array are:", palindromes);

  //2.using arrow  fuction
  //a)Print odd numbers in an array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  
  console.log("Odd numbers in the array are:", oddNumbers);

  //b)Convert all the strings to title caps in a string array

  const titleCapsArray = stringArray.map(str => {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
  
  console.log("String array with title caps:", titleCapsArray);

  //c)Sum of all numbers in an array
  const number= [1, 2, 3, 4, 5];

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
  console.log("Sum of all numbers in the array:", sum);

//d)
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const p = numbers.filter(num => isPrime(num));

console.log("Prime numbers in the array:", primeNumbers);

//e)
const []= (() => {
  const arr = ["level", "radar", "hello", "world", "madam"];
  return arr.filter(word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  });
})();

console.log("Palindromes in the array are:", palindromes);














        
    
        
        
    
