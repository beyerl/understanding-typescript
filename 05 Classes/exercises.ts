// Exercise 1
class Car {

    constructor(
        public name: string,
        public acceleration: number = 0
    ){}

    honk(){
        console.log("Toooooooooot!");
    }

    accelerate(speed: number){
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
console.log(car.name)
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
abstract class baseObject {
    constructor(
        public width: number = 0,
        public length: number = 0,
    ){}
};

class Rectangle extends baseObject {
    constructor(){
        super(5, 2)
    }

    public calcSize(){
        return this.width * this.length;
    }
}

const rectangle = new Rectangle()

console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string = ""

    get firstName(){
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}

const person = new Person()
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
