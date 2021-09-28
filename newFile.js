
const hello = () => console.log("Hello World");


hello();


const damonsFriends = ["Maya", "Reuben", "Emir", "Jaleel", "Zeke"]; 
const emirsFriends = ["Leslie", "Naz", "Reuben", "Maya"]; 

let mutualFriends = [];

for(let i = 0; i < damonsFriends.length; i++) {
  for(let j = 0; j < emirsFriends.length; j++) {
    if(damonsFriends[i] === emirsFriends[j]) {
       mutualFriends.push(damonsFriends[i]);
 }
}
}
console.log(mutualFriends);

const doubleValues = array => {
  let doubledArray = [];
  
  for(let i = 0; i < array.length; i++) { 
    let doubledValue = array[i] * 2;

   doubledArray.push(doubledValue);

}
return doubledArray;

}

console.log(doubleValues([2, 3, 7, 9])); 

const addition = (num1, num2) => num1 + num2;

console.log(addition(5, 7));


console.log("Kayla is cool"); 



const feetToMeters = feet => feet * 0.3048;

console.log(feetToMeters(3587)); 


console.log('Hello my name is Emir');


const helloStudent = studentsName => console.log(`Hello, ${studentsName}! Welcome to the Marcy Lab School`);

console.log(helloStudent('Leo')); 
