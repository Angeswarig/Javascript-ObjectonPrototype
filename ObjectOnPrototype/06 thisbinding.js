const Angesh={
    Name:"Angeshwari",
    role:"Admin",
    courseCount:2,
    getInfo:function(){
    console.log(`
      your name is ${this.Name}
      role is ${this.role}
      courseCount is ${this.courseCount}
    `);
    }
};
Angesh.getInfo();

const Anu={
    Name:"Anu",
    role:"sub-Admin",
    courseCount:3,
}
//binding,
Angesh.getInfo.bind(Anu)();//this one way of binding,
var res=Angesh.getInfo.bind(Anu);//another way of binding,
res();
Angesh.getInfo.call(Anu);//this directly call Anu by referring Angesh,
//bind and call both performa the same function:)
