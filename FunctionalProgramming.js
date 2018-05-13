var numbers=[2,3,5,6, 10];

//map function
var result =  numbers.map( x => {
  return x * 2;
});
console.log(result);

//for each
numbers.forEach((x) =>{
    console.log("The number is " + x)
});

let output = numbers.reduce((sum, result)=>{
  console.log("first " + sum);
  console.log("second " + result);
  return sum + result;
});

console.log(output);

//find method

var found = numbers.find(x => {
    return x === 10;
})

console.log("Found "+found);


//findIndex method

var found = numbers.findIndex(x => {
    return x === 10;
})

console.log("Found "+found);

var jsonResponse =[{"name":"Pradeep", location:"Bangalore"},{"name":"Naveen", location:"Chennai"},{"name":"Vikram", location:"Mangalore"}];

Object.keys(jsonResponse).map((value)=>{
    console.log('Value is '+ jsonResponse[value].location);
})


//setTimeout
var printFun = function(){
    console.log("Calledd here !!");
}

var callFunction = setTimeout(printFun, 2000);

console.log("Called before the interval is finished executing..");


//setInterval
var printFun2 = function(){
    console.log("Calledd here !!");
}

//var callFunction2 = setInterval(printFun2, 2000);

console.log("Called before the interval is finished executing..");

var jsonObj={
    name:"Pradeep",
    age:35
}

var jsonStr = JSON.stringify(jsonObj);
//console.log(JSON.stringify(jsonObj));

console.log(JSON.parse(jsonStr));


