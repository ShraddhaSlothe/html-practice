console.log("this is tutorial 53");

function greet(name, greetText="greetings from javascript "){
    console.log(greetText + "" + name);
    console.log(name + " is a good boy");
    
}
function sum (a,b,c){
    let d = a + b + c;
    return d;

}

let name = "shubham";
let name1 = "saurabh";
let name2 = "prasad";
let name3 = "ankush";
let greetText = " good morning ";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnVal=greet(name3);
// console.log(returnVal)

let returnval = sum(1,2,3);
console.log(returnval)
// console.log(name  +   " is a good boy");
// console.log(name1 +  " is a good boy");
// console.log(name2 +  " is a good boy");
// console.log(name3 +  " is a  good boy"); 