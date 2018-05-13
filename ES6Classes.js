
class Vehicle{
    constructor(model, type, color){
        this.color = color;
        this.type = type;
        this.model = model;
        this.speed = 0;
    }

    getType(){
        return "Car";
    }

}

class Car extends Vehicle {
    constructor(model, type, color){
        super(model, type, color);
    }

    setColor(c){
        this.color = c; 
    }

    getColor(){
        return this.color;
    }

    accelerate(){
        this.speed++;
    }

    getSpeed(){
        return this.speed;
    }

    halt(){
        this.speed = 0;
    }

    static getManufacturer(){
        return "Maruthi Suzuki....";
    }
}

var myCar = new Car("2018", "Maruti", "Black");
console.log(myCar.getColor());
console.log(myCar.getSpeed());
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
console.log(myCar.getSpeed());

console.log(Car.getManufacturer());

var myNewVehicle = new Car();
console.log(myNewVehicle.getType())