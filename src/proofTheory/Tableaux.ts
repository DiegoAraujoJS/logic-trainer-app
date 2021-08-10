import Formula from './Formula'
class Tableaux {
    right: Tableaux;
    left: Tableaux;
    formula: Formula;
    
    constructor(right: Tableaux, left: Tableaux, formula: Formula) {
        this.right = right;
        this.left = left;
        this.formula = formula
    }
}