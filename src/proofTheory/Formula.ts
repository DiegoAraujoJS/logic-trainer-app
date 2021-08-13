import {FTypes, IFormula, Conjunction, Disyunction, Conditional, Negation} from '../Interfaces'
class Formula<T extends FTypes> implements IFormula<T>{
    formula: T;
    
    constructor(f: T) {
        this.formula = f
    }

    conjunction(f: Formula<T>): Formula<Conjunction> {
        return new Formula<Conjunction> ([this, '&', f])
    }

    disyunction(f: Formula<T>): Formula<Disyunction> {
        return new Formula<Disyunction> ([this, 'v', f])
    }

    conditional(f: Formula<T>): Formula<Conditional> {
        return new Formula<Conditional> ([this, '->', f])
    }

    negation (): Formula<Negation> {
        return new Formula<Negation> (['¬', this])
    }
}

export default Formula