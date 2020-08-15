class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }


    append(value) {
        const newNode = { value: value, next: null }

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }    


    prepend(value) {
        const newNode = { value: value, next: this.head }
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }


    find(value) {
        if (!this.head) {
            return "No elements to find";
        }

        let curNode = this.head;

        while (curNode) {
           if (curNode.value === value) {
               return curNode;
           } else {
               curNode = curNode.next;
           }
        }

        return "No elements matching this value";
    }


    delete(value) {
        if (!this.head) {
            return "No elements to delete";
        }
        
        while (this.head && this.head.value === value ) { 
            this.head = this.head.next;
        }

        let curNode = this.head;
        
        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }


    toArray() {
        const elements = [];
        let curNode = this.head;

        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }

}


//? TESTING
const linkedList1 = new LinkedList();

// Append
linkedList1.append('it works');
linkedList1.append(9);
linkedList1.append(true);
linkedList1.append(6.39);

// Prepend
linkedList1.prepend(['hello', 'arr el']);
linkedList1.prepend('this is the first fucking element');

// ToArray before deleting
//console.log(linkedList1.toArray())

// Delete
linkedList1.delete(9);

// Find
console.log(linkedList1.find('it works'));

// ToArray
console.log(linkedList1.toArray());