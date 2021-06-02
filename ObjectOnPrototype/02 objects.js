var User={
    name:"",
    getUserName: function(){
        console.log(`name is ${this.name}`);
    }
};

//this is efficient,
var angesh = Object.create(User);
//console.log(angesh);
angesh.name="Angeswari";
angesh.getUserName();

//another way of creating object outside,
var bala=Object.create(User,{
    name:{value:"Balamurugan"},  //create obj(k:v) inside obj,
    courseCount:{value:3}

});
bala.getUserName();