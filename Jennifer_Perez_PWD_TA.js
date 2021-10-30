// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

  let sedanBrands=carBrands.filter(element=>{
    let check=element.type
    if(check==="sedan"){
      return element
    }
  })
  console.log(sedanBrands)

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
const reverseString=(str)=>{
  let reversed=""
  for(let i=str.length-1;i>=0;i--){
    reversed+=str[i]
  }
  return reversed
}
console.log(reverseString("cat")) //"tac"


// 3.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
let total
 arr.reduce((acc,eachElement)=>{
  return total=acc+eachElement.price
  },0)
  return total
}
console.log(shop(wishlist));


// 4.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

// -------Response:
// Recursion is a process or a function that calls itself. 
// We can look at recursion as an alternative way of writing a for loop however the difference is that a loop takes an iterative approach
// to the problem.  
//In recursion, a function calls itself and everytime it invokes itself with a new argument passed, it is pushed to the top of the call stack. 
// Hence, it utilizes different input or data every time it is called. 
//When the function returns, the item placed in the top of the stack will be removed. 
//When utilizing recursion, it requires to set a base case which determines when the function or recursive method should stop. This usually involves a conditional.

// Example of recursive algorithm:
function countDown (num){
  if(num<=0){
    console.log("Countdown done")
    return
  }
  console.log(num)
  num--
  countDown(num);
}
countDown(5)

// Explained: 
// The countdown function takes in an argument of a number, in this case the number passed into the function is 5. 
// The base case or condition written checks if the number passed is equal to zero or is less than 0. 
// ---Is 5 less than or equal to 0? No, it is not, therefore it does not go inside of the if blockcode denotated inside the curly braces{}
//the number 5 is pushed to the stack  

//the number decrements by 1 where 5-1=4 and the new argument or number passed to the function is the decremented value result of 4.
// the function calls itself with the new argument passed  **** countDown(4) and goes through the function.
// is 4 less than or equal to 0? no, thus it skips the block inside the curly braces 
//the number 4 is pushed to the stack 

//the number decrements by 1 where 4-1=3 and the new argument or number passed to the function is the decremented value result of 3.
// the function calls itself with the new argument passed  **** countDown(3) and goes through the function.
// is 3 less than or equal to 0? no, thus it skips the block inside the curly braces 
//the number 3 is pushed to the stack 

//the number decrements by 1 where 3-1=2 and the new argument or number passed to the function is the decremented value result of 2.
// the function calls itself with the new argument passed  **** countDown(2) and goes through the function.
// is 2 less than or equal to 0? no, thus it skips the block inside the curly braces 
//the number 2 is pushed to the stack 

//the number decrements by 1 where 2-1=1 and the new argument or number passed to the function is the decremented value result of 1.
// the function calls itself with the new argument passed  **** countDown(1) and goes through the function.
// is 1 less than or equal to 0? no, thus it skips the block inside the curly braces 
//the number 1 is pushed to the stack 

//the number decrements by 1 where 1-1=0 and the new argument or number passed to the function is the decremented value result of 0.
// the function calls itself with the new argument passed  **** countDown(0) and goes through the function.
// is 0 less than or equal to 0? yes,  therefore, the if condition is met
//we now enter the if conditional block (information inside of the curly braces) which is also the base case. 
//since the base case is met, the call stack will now start to return the values push to the stack by popping the values from the top of the stack. 
//the return will be as follow: 5,4,3,2,1,countdown done




