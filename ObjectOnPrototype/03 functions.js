//SELF EXECUTING ANONYMOUS FUNCTION also called IIFE,
//ANONYMOUS MEANS WITHOUT FUNCTION NAME,

(function(){
    console.log("HELLO");
})();



//SELF TESTING PART...............

function sayHello(){
    return "Hello,Everyone"
}
let res=sayHello();
console.log(res);
console.log(sayHello());


function calculator(x,y){
    console.log("the addition of x+y is",x+y);
    console.log("the subtraction of x-y is",x-y);
    console.log("the multiplication of x*y is",x*y);
    console.log("the division of x/y is",(x/y).toFixed(2));
}
calculator(100,75);