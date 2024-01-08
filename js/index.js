//1 .ways to print in Java script
//console.log("Hello World");
// alert("me");
//document.write(This is document write")

// 2. Javascript console API (Application prpgraming Interface)
// console.log("Hello World", 4 + 6, "another log");
// console.warn("This is Warning");
// console.error("this is an error");

//3. JavaScript variables
//what are variables? - containers to store data values

/*
multi
line
comment
*/

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// // 4.Data types in javascript
//Numbers
var num1 = 455;
var num2 = 56.76;

// //string
var str1 = "This is a string";
var str2 = "This is also a string";

//objects
var marks = {
    Ravi: 34,
    Shubham: 99.99,
    Harry: 78,
}
// console.log(marks);

// console.log(str1);

// Booleans
var a = true;
var b = false;
// console.log(a,b);

//var und = undefined;
var und = undefined;
// console.log(und);

var n = null;
// console.log(n)
/*
At the very high level,there are two types od data types in javascript
1.primitive data types : undefined,null,number,string, boolean,symbol
2.referance data types:

*/

var arr = [1, 2, "shubham", 4, 5]
// console.log(arr[2]);

//OPERATORS in Java script
//Arithmatic Operators

var a = 34;
var b = 56;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is", a-b);
// console.log("the value of a*b is", a*b);
// console.log("the value of a/b is", a/b);

// Assignment Operators
var c = b;
// c += 2;
c -= 2;
c -= 2;
// console.log(c);

var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//logical operators

// console.log(true && true)
// console.log(true && false)
// console.log(true && false)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(true || false)
// console.log(false || false)

//logical not
//console.log(!false);
//console.log(!true);
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1 ,c2);

//conditions in javascript

var age = 41;
//single if statment
// if (age > 18){
//     console.log('you can drive the car');

// }
// //If else statement
// if(age > 18){
// console.log('you can drive the car')
// }
// else{
// //      console.log('you cannot drive the car');
// // }

// //  if-else ladder
// age = 31;
//  if(age>32){
//     console.log("you are not a kid");
//  }
//  else if(age > 26){
//     console.log("yor are not a child");
//  }
//  if(age>22 ){
//     console.log("you are not a child")
//  }
//  else if(age > 18){
//     console.log(" 18 you are not a kid")
//  }
//  else{
//     console.log("you child");
//  }
//  console.log("End of ladder");
 
var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}
//  OR
// //  for iterating array foreach function is used
//  arr.forEach(function(element){
//     console.log(element)
//  })
// const ac = 0;
// ac++;
// ac = ac +1;
 
//  let j = 0;
//  while(j<arr.length){
//  console.log(arr[j]);
//  j ++;
//  }

//  do{
//     console.log(arr[j]);
//     j++;
// }while (j < arr.length);

let myArr = ["fan", "camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// myArr.unshift("harry")
// console.log(newLen);
// console.log(myArr);

//string methods in javascript
let myLovelyString = "Harry is a good boy good good"; 
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry","shubham");
// d = d.replace("good","bad");
// console.log(d,myLovelyString) 

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")



// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// customElements.innerText = "this is created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "this is created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// // reemoveChild(Element);----->removes an Element

// //Selecting using Query
// sel =  document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('the button was clicked')
// }
// window.onload = function(){
    //console.log('the document was loaded')
//}

// Events in JavaScript
// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b> "
//      console.log("Clicked on Container")

//  })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse out on container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })
// firstcontainer.addEventListener('mouseup',function(){
//     console.log("mouse up when clicked on container");
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b> "
//     console.log("mouse down when clicked on container");
// })

//Arrow Functions
function summ(a,b){
    return a+b;
}
summ = (a,b)=>{
    return a+b;
}
logKaro = ()=>{
    console.log("i am your log")
}

// setTimeout and setInterval
setTimeout(logKaro,2000);