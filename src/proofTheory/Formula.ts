import {FTypes, IFormula, Conjunction, Disyunction, Conditional, Negation, InmediateConstituents} from '../Interfaces'

export default class Formula<T extends FTypes> implements IFormula<T>{
    formula: T;
    readonly inmediate_constituents: InmediateConstituents
    
    constructor(f: T) {
        this.formula = f
        this.inmediate_constituents = this.get_inmediate_constituents
    }

    conjunction(f: Formula<FTypes>): Formula<Conjunction> {
        return new Formula<Conjunction> ([this, '&', f])
    }

    disyunction(f: Formula<FTypes>): Formula<Disyunction> {
        return new Formula<Disyunction> ([this, 'v', f])
    }

    conditional(f: Formula<FTypes>): Formula<Conditional> {
        return new Formula<Conditional> ([this, '->', f])
    }

    negation (): Formula<Negation> {
        return new Formula<Negation> (['¬', this])
    }

    private has_two_constituents(f: FTypes): f is Conjunction | Disyunction | Conditional {
        return Array.isArray(this.formula) ? this.formula.length === 3 : false
    }

    private has_one_contituent(f: FTypes): f is Negation {
        return Array.isArray(this.formula) ? this.formula.length === 2 : false
    }

    private get get_inmediate_constituents(): InmediateConstituents {
        if (this.has_two_constituents(this.formula)) {
            return [this.formula[0], this.formula[2]]
        } else if (this.has_one_contituent(this.formula)){
            return [this.formula[1], null]
        } else {
            return null
        }
    }

}


