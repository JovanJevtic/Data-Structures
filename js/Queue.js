class Queue {

    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
        return this.collection;
    }

    enqueue(value) {
        this.collection.push(value);
        return value;
    }

    dequeue() {
        console.log(`Removed: ${this.collection[0]}`)
        return this.collection.shift();
    }

    front() {
        console.log(`Front element: ${this.collection[0]}`)
        return this.collection[0];
    }

    length() {
        console.log(`Length: ${this.collection.length}`);
        return this.collection.length;
    }

    isEmpty() {
        console.log(this.collection.length === 0 ? 'Empty' : 'NOT Empty')
        return (this.collection.length === 0);
    }

}

//? Testing

const queue1 = new Queue();

// Enqueue 
queue1.enqueue('First Element');
queue1.enqueue(12);
queue1.enqueue(true);

// Print
queue1.print();

// Dequeue
queue1.dequeue();

// Front
queue1.front();

// Length
queue1.length();

// Is Empty
queue1.isEmpty();