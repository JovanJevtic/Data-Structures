class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value, left = null, right = null) {
        
        let Node = {
            value, 
            left, 
            right
        }
    
        let currentNumberNode;
        
        if (!this.root) {
            this.root = Node;
        } else {
            currentNumberNode = this.root;

            while (currentNumberNode) {
                if (value < currentNumberNode.value) {
                    if (!currentNumberNode.left) {
                        currentNumberNode.left = Node;
                        break;
                    } else {
                        currentNumberNode = currentNumberNode.left; 
                    }
                } else if (value > currentNumberNode.value) {
                    if (!currentNumberNode.right) {
                        currentNumberNode.right = Node;
                        break;
                    } else {
                        currentNumberNode = currentNumberNode.right;
                    }
                } else {
                    console.log("Try Different Value");
                    break;
                }
            }
        }
    }

}

const BTS1 = new BinarySearchTree();

BTS1.insert(5);
BTS1.insert(7);
BTS1.insert(12);
BTS1.insert(14);
BTS1.insert(18);
BTS1.insert(13);