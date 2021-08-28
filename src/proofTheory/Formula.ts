import {FTypes, IFormula, Conjunction, Disyunction, Conditional, Negation, InmediateConstituents, Basic} from '../Interfaces'

export default class Formula<T extends FTypes> implements IFormula<T>{
    formula: T;
    readonly inmediate_constituents: InmediateConstituents
    left: Formula<FTypes> | null
    right: Formula<FTypes> | null
    kind: T extends Conjunction ? "Conjunction" : T extends Disyunction ?  "Disyunction" : T extends Conditional ? "Conditional" : T extends Negation ? "Negation" : "Atomic";
    constructor(f: T, kind: T extends Conjunction ? "Conjunction" : T extends Disyunction ?  "Disyunction" : T extends Conditional ? "Conditional" : T extends Negation ? "Negation" : "Atomic") {
        this.kind = kind
        this.formula = f
        
        this.inmediate_constituents = this.get_inmediate_constituents
        this.right = Array.isArray(this.inmediate_constituents) ? this.inmediate_constituents[1] : null
        this.left = Array.isArray(this.inmediate_constituents) ? this.inmediate_constituents[0] : null
        
    }

    conjunction(f: Formula<FTypes>): Formula<Conjunction> {
        return new Formula<Conjunction> ([this, '&', f], "Conjunction")
    }

    disyunction(f: Formula<FTypes>): Formula<Disyunction> {
        return new Formula<Disyunction> ([this, 'v', f], "Disyunction")
    }

    conditional(f: Formula<FTypes>): Formula<Conditional> {
        return new Formula<Conditional> ([this, '->', f], "Conditional")
    }

    negation (): Formula<Negation> {
        return new Formula<Negation> (['¬', this], "Negation")
    }

    has_two_constituents(f: FTypes): f is Conjunction | Disyunction | Conditional {
        return Array.isArray(this.formula) ? this.formula.length === 3 : false
    }

    is_negation(f: FTypes): f is Negation {
        return Array.isArray(this.formula) ? this.formula.length === 2 : false
    }
    
    private get get_inmediate_constituents(): InmediateConstituents {
        
        if (this.has_two_constituents(this.formula)) {
            return [this.formula[0], this.formula[2]]
        } else if (this.is_negation(this.formula)){
            return [this.formula[1], null]
        } else {
            return null
        }
    }

}


