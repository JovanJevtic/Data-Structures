class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

class Tree:
    def __init__(self):
        self.root = None
    
    def getRoot(self):
        return self.root
        
    def add(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self._add(value, self.root)
        
    def _add(self, value, node):
        if value < node.value:
            if node.left is not None:
                self._add(value, node.left)
            else:
                node.left = Node(value)
        else:
            if node.right is not None:
                self._add(value, node.right)
            else:
                node.right = Node(value)

    def find(self, value):
        if self.root is not None:
            return self._find(value, self.root)
        else: 
            return None

    def _find(self, value, node):
        if value == node.value:
            return node
        elif (value < node.value and node.left is not None):
            self._find(value, node.left)
        elif (value > node.value and node.right is not None):
            self._find(value, node.right)

    def deleteTree(self):
        self.root = None
    
    def printTree(self):
        if self.root is not None:
            self._printTree(self.root)

    def _printTree(self, node):
        if node is not None:
            self._printTree(node.left)
            print(str(node.value) + ' ')
            self._printTree(node.right)

    def reverseTree(self, root):
        if root:    
            left = root.left
            right = root.right
            root.left = right
            root.right = left

            self.reverseTree(root.right)
            self.reverseTree(root.left)
        
        return root



tree = Tree()
tree.add(1)
tree.add(5)
tree.add(2)
tree.add(3)
tree.add(7)

tree.printTree()

print("###")

tree.reverseTree(tree.getRoot())
tree.printTree()

    