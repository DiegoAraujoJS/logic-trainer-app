type BasicFormula = {
    letter: 'P' | 'Q' | 'R' | 'S'
    sub_index: number;
}

class Formula{
    formula: BasicFormula | [Formula, "&" | "|", Formula];

    constructor(formula: BasicFormula | [Formula, "&" | "|", Formula]){
        this.formula = formula
    }

    conjunction (input_formula: Formula): Formula {
        return new Formula (
            [this, '&', input_formula]
        )
    }

    disyunction (input_formula: Formula): Formula {
        return new Formula (
            [this, '|', input_formula]
        )
    }
    
    get get_formula () {
        return this.formula
    }
}

export default Formula

const f1 = new Formula({letter: 'P', sub_index: 1})
const f2 = new Formula({letter: 'Q', sub_index: 1})
const f3 = f1.conjunction(f2).conjunction(f1).disyunction(f2)
console.log(f3.get_formula)