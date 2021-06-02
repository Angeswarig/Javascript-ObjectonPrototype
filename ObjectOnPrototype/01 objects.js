// USING 'New' keyword in javascript,Object as functional approach,
//creating object in function,
//prototype for creating new User -signup
var User=function (firstname,courseCount){
    this.firstname = firstname;//this is the way of creating objects in function,
    this.courseCount = courseCount;
    this.getcourseCount=function() {
        console.log(`courseCount is : ${this.courseCount}`);
    };

};

//uses of prototype in javascript,
//injecting method on object but, outside the object:)
User.prototype.getFirstName=function(){
    console.log(`your FirstName is :${this.firstname}`);
}

var Sam = new User("sam",4);//"new" creates the  unique object as in proto-type for every user,
Sam.getcourseCount();

if(Sam.hasOwnProperty("firstname")){
    Sam.getFirstName();
}
//Sam.getFirstName();//this is a blind call
//console.log(Sam);

var Angesh=new User("Angesh",2);
Angesh.getcourseCount();
Angesh.getFirstName();
//console.log(Angesh);

//when we use 'new' in function call, its not a regular function call,
//though it seems like that, 
//that's why,'this' points inside the function, not a global 'this-window' function .