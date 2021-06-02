//closure,

function init(){
    var name="Angesh";
    console.log("i am init");
    function sayName(){
        console.log(name);
    }
    return sayName;
}
 var res = init();
res();


function doAddition(x){
    return function(y){
        return x+y;
    }
}
var add=doAddition(10);
console.log(add(5));
// var res=add(5);
// console.log(res);

console.log(doAddition(25)(15));
//doAddition()();//this is called curring
