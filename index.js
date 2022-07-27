console.log("hello world");

//Create one function with zero parameter having a console statement;
function zero (){
    console.log("function with zero parameter");
}
zero();


//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b){
   console.log(a+b);
}
sum(3,4);


//Create one arrow function
const aFun = () =>{
    console.log("arrow function");
}
aFun();

//"Print output: 
 var x = 21;
 var girl = function () {
    console.log(x); //undefined
     var x = 20;
 };
 girl ();


//"Print output: 
 var x = 21;
 girlOne ();
 console.log(x) //21
 function girlOne() {
   console.log(x); // undrfined
     var x = 20;
};
 girlOne();

// "Print output

var x = 21;
a(); // a is not defined
b(); // b is not defined
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};


//Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    console.log(fact);
  }
  factorial(5); //120
