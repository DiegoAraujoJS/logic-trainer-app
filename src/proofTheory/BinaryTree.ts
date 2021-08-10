interface Formula {
    formula: object
}

class BinaryTree {
    right: BinaryTree;
    left: BinaryTree;
    formula: Formula;
    
    constructor(right: BinaryTree, left: BinaryTree, formula: Formula) {
        this.right = right;
        this.left = left;
        this.formula = formula
    }
    get getRight() {
        return this.right
    }

}