import Formula from './Formula'
class Tableaux {
    right: Tableaux | null = null
    left: Tableaux | null = null
    formula: Formula;
    
    constructor(formula: Formula) {
        this.formula = formula
    }

    // build (){
    //     this.right = 
    // }

    // decompose(f: Formula) {
    //     if (f.get_formula)
    // }

    
}