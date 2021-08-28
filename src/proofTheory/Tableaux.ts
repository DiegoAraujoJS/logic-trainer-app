import Formula from './Formula'
import { Basic, Conditional, Conjunction, Disyunction, FTypes, ITableaux, Negation } from '../Interfaces'
import getArrayDepth from '../utils/getArrayDepth'

export default class Tableaux<T extends FTypes> implements ITableaux<T>{
    formula: Formula<T>
    right: Tableaux<FTypes> | null
    left: Tableaux<FTypes> | null

    constructor(f: Formula<T>, private r?: Tableaux<FTypes>) {
        this.formula = f
        this.right = null
        this.left = null
    }

    get_branches_execution(tree: Tableaux<FTypes>, branches: any[], trace: null | Formula<FTypes>[] = null): void {
        trace = Array.isArray(trace) ? [...trace, tree.formula] : [tree.formula]
        const this_branches_l = tree.left ? this.get_branches_execution(tree.left, branches, trace) : []
        const this_branches_r = tree.right ? this.get_branches_execution(tree.right,  branches, trace) : []
        if (! (tree.left || tree.right)) {
            branches.push(trace)
        }
    }
    
    get get_branches(): Formula<FTypes>[] {
        let branches: Formula<FTypes>[] = []
        this.get_branches_execution(this, branches)
        return branches
    }

}



// const T = new Tableaux(new Formula<Basic>('P'))
// T.right = new Tableaux(new Formula<Basic>('Q'))
// T.left = new Tableaux(new Formula<Basic>('R'))
// T.right.right = new Tableaux(new Formula<Basic>('S'))
// T.left.left = new Tableaux(new Formula<Basic>('T'))
// T.left.right =  new Tableaux(new Formula<Basic>('S'))

const P = new Formula<Basic>('P')
const Q = new Formula<Basic>('Q')
const P_or_Q = P.disyunction(Q)
const T = new Tableaux(P_or_Q)
T.right = new Tableaux(P)
T.right.right = new Tableaux( new Formula('P'))
T.right.left = new Tableaux(new Formula('P').conjunction(new Formula('Q')))
T.left = new Tableaux(Q)

console.log(T.get_branches)
/// [ [], 1] --> 2

let array = [1, [[2]], [1]]


    //     P
    //    /\
    //   R  Q
    //  /\   \
    // T S    S