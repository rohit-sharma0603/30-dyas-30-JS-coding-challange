var createHelloWorld = function(){
    return () =>  "Hello World"; 
}

var x=createHelloWorld();
var y=x();
console.log(y);