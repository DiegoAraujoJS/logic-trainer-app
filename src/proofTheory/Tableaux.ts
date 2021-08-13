import Formula from './Formula'
class Tableaux<T> {
    right: Tableaux | null = null
    left: Tableaux | null = null
    formula: Formula;
    
    constructor(formula: Formula) {
        this.formula = formula
    }

}