import Formula from './Formula'
import { Basic, Conjunction, FTypes, ITableaux } from '../Interfaces'

export default class Tableaux<T extends FTypes> implements ITableaux<T>{
    formula: Formula<T>
    right: Tableaux<FTypes> | null
    left: Tableaux<FTypes> | null

    constructor(f: Formula<T>, private r?: Tableaux<FTypes>) {
        this.formula = f

        this.right = r || null
        this.left = null
    }

    private generate_tableaux(): Tableaux<T> {
        
        if (this.formula.is_negation(this.formula.formula)) {
        }
        return new Tableaux<T>(this.formula)
    }

}

function get_branches (tableaux: Tableaux<FTypes>): any{
    let result = []
    if (tableaux.right && tableaux.left) {
        result.push([tableaux.formula, ...get_branches(tableaux.left)], [tableaux.formula, ...get_branches(tableaux.right)])
    } else if (tableaux.right) {
        result.push( [tableaux.formula, ...get_branches(tableaux.right)])
    } else if (tableaux.left) {
        result.push( [tableaux.formula, ...get_branches(tableaux.left)])
    } else {
        return [tableaux.formula]
    }
    
    return result
}

const T = new Tableaux(new Formula<Basic>('P'))
T.right = new Tableaux(new Formula<Basic>('Q'))
T.left = new Tableaux(new Formula<Basic>('R'))
T.right.right = new Tableaux(new Formula<Basic>('S'))
T.left.left = new Tableaux(new Formula<Basic>('T'))
T.left.right =  new Tableaux(new Formula<Basic>('S'))
console.log(get_branches(T))

    //     P
    //    /\
    //   R  Q
    //  /\   \
    // T S    S