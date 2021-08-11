import {BasicFormula, JunctionFormula, NegationFormula} from '../Interfaces'
class Formula{
    formula: BasicFormula | JunctionFormula | NegationFormula;

    constructor(formula: BasicFormula | JunctionFormula | NegationFormula){
        this.formula = formula
    }

    negation (): Formula {
        return new Formula(
            ["¬", this]
        )
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

    conditional (input_formula: Formula): Formula {
        return new Formula(
            [this, '->', input_formula]
        )
    }

    get get_formula (): BasicFormula | [string, object] | [object, string, object] {
        if (!Array.isArray(this.formula)){
             return this.formula
        } else if (this.formula[0] === "¬") {
            
            return ["¬", this.formula[1].get_formula]
        } else {
            return [this.formula[0].get_formula, this.formula[1], this.formula[2].get_formula]
        }
    }

    
}

export default Formula
