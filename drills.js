//Tree Traversal
//in-order
//pre-order
//post-order
class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        //if the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        // If the new key is less than the node's key 
        // needs to live in the LEFT
        else if (key < this.key) {
            //if the existing node does not have any left child, 
            //instantiate & insert new node  
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this); //pass 'this' as parent
            }
            //if the node has an existing left child, 
            //then we recursively call the `insert` method 
            //so the node is added further down the tree.
            else {
                this.left.insert(key, value); //recursive shit right here
            }
        }
        //Similarly, if the new key is greater than the node's key 
        //then you do the same thing, but on the RIGHT side.
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    find(key) {
        //if the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        //if the item less than the root go LEFT
        //if there is an existing left child, 
        //then recursively check its left and/or right child
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        //if the item is greater than the root go RIGHT
        //if there is an existing right child, 
        //then recursively check its left and/or right child
        //until you find the item.
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        //You have search the treen and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            //If the node only has a left child, 
            //then you replace the node with its left child.  
            else if (this.left) {
                this._replaceWith(this.left);
            }
            //And similarly if the node only has a right child 
            //then you replace it with its right child.
            else if (this.right) {
                this._replaceWith(this.right);
            }
            //If the node has no children then
            //simply remove it and any references to it 
            //by calling "this._replaceWith(null)".
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    _findMax() {
        if(!this.right) {
            return this;
        }
        return this.right._findMax();

    }
}

const bst = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22';

function main() {
    let bst = new BinarySearchTree();
        bst.insert(25);
        bst.insert(15);
        bst.insert(50);
        bst.insert(10);
        bst.insert(24);
        bst.insert(35);
        bst.insert(70);
        bst.insert(4);
        bst.insert(12);
        bst.insert(18);
        bst.insert(31);
        bst.insert(44);
        bst.insert(66);
        bst.insert(90);
        bst.insert(22);
        // (dsfPreOrder(bst));
        // InOrder(bst);
        // PostOrder(bst);
}
main();

function PreOrder(bst) {
    console.log(bst.key);
    if (bst.left) {
        PreOrder(bst.left);
        
    }
    if (bst.right) {
        PreOrder(bst.right);
    }

}

function InOrder(bst) {
    if(bst.left) {
        InOrder(bst.left);
    }
    console.log(bst.key);
    if(bst.right) {
        InOrder(bst.right);
    }
}


function PostOrder(bst) {
    if (bst.left) {
        PostOrder(bst.left);
    }
    
    if (bst.right) {
        PostOrder(bst.right);
    }
    console.log(bst.key);
}

const sharePrice = [128, 97, 121, 123, 98, 97, 105]

function maxProfit(array) {
    let minVal = array[0];
    let index = 0; 
    for (let i = 0; i < array.length; i++) {
        if(array[i]< minVal) {
            minVal = array[i];
            index = i; 
        }
    }
    let maxVal = array[index];
    for (let i = index; i < array.length; i++) {
        if(maxVal < array[i]) {
            maxVal = array[i];
        }
    }
    return maxVal - minVal;
}

// console.log(maxProfit(sharePrice))


function eggDrop() {
    n (n+1) / 2  >=  100
}