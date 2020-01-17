// Arrays
// function printAll<T>(args: T[]){
//     args.forEach(element => console.log(element))
// }
// printAll<string[]>(["Apples",  "Banana"]);

// Generic Types
// const echo2: <T>(data: T) => T = betterEcho;

// Generic class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue:  U;
    calculate(): number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string,  number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

// Exercise

class MyMap<T extends  number | string> {
    content: {[key: string]: T}[]

    // should create a new key-value pair
    setItem(key: string, item: T): {
        this.content.push({key, item)
    } 

    // should retrieve the value of the provided key
    getItem(key: string){

    } 

    // should remove all key-value pairs
    clear(){

    }

    // should output key-value pairs
    printMap(){

    } 
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();