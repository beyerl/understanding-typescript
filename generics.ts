class MyMap<T extends  number | string> {
    content: {[key: string]: T} = {}

    // should create a new key-value pair
    setItem(key: string, item: T): void {
        this.content[key] = item;
    } 

    // should retrieve the value of the provided key
    getItem(key: string): T {
        return this.content[key];
    } 

    // should remove all key-value pairs
    clear(): void {
        this.content = {}
    }

    // should output key-value pairs
    printMap(){
        for (const key in this.content) {
            console.log(`${key}: ${this.content[key]}`)
        }
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