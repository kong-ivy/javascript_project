//objects in js
//dic in python

let student={first_name:"xiaoyan",
            last_name:"liu",
            age:18,
            height:160,
            fullname: function(){
                return this.first_name+" "+this.last_name
            }}
//console.log(student.first_name)

student.first_name="ivy"            //change value
//console.log(student.first_name)
console.log(student.fullname())     //call function in object


//conditional,control flows and if else
//18-35 is my target customer
//&& and   || or

let age=18
//prompt("what is your age?")

if(age>=18 && age<35){
    console.log("the age is "+age)
} else {
    console.log("not my customer")
}


//switch staetements
//difference between weekday vs weekend
switch(2){
    case 0:
        text='weekend';
        break;
    case 5:
        text="weekend";
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';
        break;
}

console.log(text)

