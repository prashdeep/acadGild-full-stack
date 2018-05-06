var funAccepting = function(x,a,b){
    x(a,b);
  }
 
  var sum = function(x,y){
      console.log(x+y);
  }
  var result = sum(34,54);
  funAccepting(result);
  funAccepting(sum, 34,56);



var result = function(){
    var x=0.
    return {
        getX: function(){
            return this.x;
        },
        setX: function(x){
            this.x = x;
        }
    }
}();

var status = result();

console.log(status);

//spread operator

var address={
    city: "Bangalore",
    state: "Karnataka"
}

var customer1 = {name: "Kiran", address: address};

var customer2 = {name: "Praveen", ... address};

console.log(customer1);
console.log(customer2);


var number1 = [1,2,3,4];
var number2 = [5,6,7,8];

var withoutSpread = [number1, number2];

var withSpread = [...number1, ... number2];




   