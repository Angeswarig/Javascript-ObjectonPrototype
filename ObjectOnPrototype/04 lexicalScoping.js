//lexical scoping,
function Init(){
    var firstName="Angesh";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}
Init();


