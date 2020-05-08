console.log("hello")

//comment

//variable
var b="smoothie";
console.log(b);

var n=89;
console.log(n);

var age=prompt("what's your age?");

document.getElementById('text').innerHTML="your age is "+age;

//number
var num=7;
//increment num by 1
num++;
num+=10;
//decrement num by 1
num--;
console.log(num);
//multiply *,duvede,remainder
console.log(num*3);
console.log(num%10);


//function

function fun(){
    console.log("this is a function")
}
fun();

//create a function that takes a name 
//and says hellow followed by your name

function greeting(name){
    var result="hello "+name
    console.log(result)
}
var name=prompt("what is your name?");
greeting(name);

//add two number
function sumnumber(a,b){
    console.log(a+b)
}
sumnumber(4,23)
sumnumber('4','23') //put string together

//while loops

var number=0;

while (number < 50){
    number+=2;
    console.log(number)
}


//for loop
for(var i=0; i<=50; i+=2){
    console.log(i)
}


//data type
let age=18; //number
//let name="ivy"; //string
let name={first:"xiaoyan",last:"liu"}; //object
let truth=true //boolean
let groceries=['apple','banana']; //array
let nothing=null; //value null
let random; //undefined

//string
let fruit='banana';
let morefruit='banana\napple'; //new line
console.log(morefruit)
console.log(fruit.indexOf('a'))  //string.indexOf('')
console.log(fruit.slice(2,4))    //string.slice()
console.log(fruit.replace('nan','123'))  //string.replace()
console.log(fruit.toUpperCase()) //string.touppercase()
console.log(fruit.toLowerCase()) //sting.tolowercase()
console.log(fruit.charAt(2))     //string.charat(2)
console.log(fruit[2])            //string[2]
console.log(fruit.split(''))  //split('') ['b','a','n']
console.log(morefruit.split('\n')) //split by a comma

//array
//create array
let fruits=['apple','banana','orange','pineapple'];
let f=new Array('apple','banana','orange','pineapple');

console.log(fruits[1])
console.log(f[1])

fruits[2]="pear"       //change element in array
console.log(fruits)

for (let i=0;i<fruits.length;i++){  //for loop for array
    console.log(fruits[i])
}

//array common methods
console.log(fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits);                 //pop
console.log(fruits.push("blackberries"),fruits);  //push
console.log(fruits.length)
console.log(fruits[3])    //add new element
fruits[4]="bluebarry"
console.log(fruits)
fruits.shift();      //remove first element
fruits.unshift("redberries");  //add to first 
console.log(fruits)

let veg=['asoaragus','tomato','broccoli']
let al=fruits.concat(veg);      //combine array
console.log(al)

console.log(al.reverse());      //reverse
console.log(al.sort());         //sort by alphabate

let somenumbers=[4,5,2,3,6,34,33,56,32,66,23]
console.log(somenumbers.sort(function(a,b){return a-b}));
console.log(somenumbers.sort(function(a,b){return b-a}));

let emptyarray=new Array();
for (let i=0;i<10;i++){
    emptyarray.push(i)
}
console.log(emptyarray)