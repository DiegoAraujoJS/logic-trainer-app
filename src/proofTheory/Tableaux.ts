import Formula from './Formula'
import { FTypes, ITableaux } from '../Interfaces'

export default class Tableaux<T extends FTypes> implements ITableaux<T>{
    formula: Formula<T>
    right: Tableaux<FTypes> | null
    left: Tableaux<FTypes> | null

    constructor(f: Formula<T>, private r?: Tableaux<FTypes>) {
        this.formula = f

        this.right = r || this.generate_tableaux()
        this.left = this.generate_tableaux()
    }

    private generate_tableaux(): Tableaux<T> {
        
        if (this.formula.is_negation(this.formula.formula)) {
        }
        return new Tableaux<T>(this.formula)
    }

}