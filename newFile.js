
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


doubleValues([2, 3, 7, 9]); 
  