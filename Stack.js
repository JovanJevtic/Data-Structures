class Stack {

    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(value) {
        this.items[this.count] = value;
        this.count++;
        console.log(`${value} added to position ${this.count}`)
        return this.count - 1;
    }

    pop() {
        if (this.count == 0) {
            return "No elements to remove";
        }
         
        let deletedItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`Popped ${deletedItem}`)
        return deletedItem;
    }

    peek() {
        if (this.count == 0) {
            return "No elements in stack";
        }

        let topItem = this.items[this.count - 1];
        console.log(`Top item: ${topItem}`)
        return topItem;
    }

    isEmpty() {
        console.log(this.count == 0 ? 'Stack empty' : 'Stack not empty');
        return this.count == 0;
    }

    length() {
        console.log(`Stack length: ${this.count}`);
        return this.count;
    }

    print() {
        let items = [];
        
        for (let i = 0; i < this.count; i++) {
            items.push(this.items[i]);
        }

        return items;
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared');
        return this.items;
    }

    info() {
        let topItem = this.peek();
        let isEmpty = this.isEmpty();
        let length = this.length();
        let stack = this.print();

        if (isEmpty) {
            console.log('Stack empty')
        } else {
            console.log(`Stack Not empty, length: ${length} Current stack: ${stack} Top item: ${topItem}`)
        }

        return this.items;
    }

}

//? Testing

const stack1 = new Stack();

// Is Empty
stack1.isEmpty();

// Push
stack1.push(3);
stack1.push(6);
stack1.push(9);

// Print 
console.log(stack1.print());

// Pop
stack1.pop();

// Peek 
stack1.peek();

// Is Empty
stack1.isEmpty();

// Length
stack1.length();

// Print 
console.log(stack1.print());

// Info
stack1.info();

// Clear
stack1.clear();


//? Reversing word
const wordStorage = new Stack();

const word = "reversed word";

let reversedWord = "";

for (let i = 0; i < word.length; i++) {
    wordStorage.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    reversedWord += wordStorage.pop();
}

console.log(reversedWord)
