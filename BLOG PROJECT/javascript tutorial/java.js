var a=2;
var b=4;
function sum(a,b){
   var sum=a+b;
    console.log("result of two number",sum);
}
// sum(2,3);
// sum(29,56);
var a=4;
var b=8;
sum(a,b);
let c=13;
let d=34;
sum(c,d);

//arrow function syntax
 var multiply=(a,b)=>{
// let mul=a*b;
// console.log("the answer is",mul);
return a*b;
 };
//  multiply(7,6);
console.log("multiply result is",multiply(7,6));

//callback function syntax
const calculation=(a,b,operation)=>{
return operation(a,b);
};
// const addition is a variable thatswhy we call addition without parenthesis;
const addition=calculation(4,6,function(num1,num2){
return num1+num2;
});
console.log("addition answer is",addition);


function subtract(a,b){
    return a-b;
}
const subresult=calculation(9,4,subtract);
console.log("subtraction answer is",subresult);


function mult(a,b){
    return a*b;
}
//yaha mult ke sath paranthesis nhi lagana h call karna h pass nahi karna h 
const multresult=calculation(9,3,mult);
console.log("multiplication answer is",multresult);
