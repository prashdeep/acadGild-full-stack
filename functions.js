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



   