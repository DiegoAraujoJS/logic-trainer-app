import Formula from './Formula'
import { Basic, Conditional, Conjunction, Disyunction, FTypes, ITableaux, Negation } from '../Interfaces'
import getArrayDepth from '../utils/getArrayDepth'

export default class Tableaux<T extends FTypes> implements ITableaux<T>{
    formula: Formula<T>
    right: Tableaux<FTypes> | null
    left: Tableaux<FTypes> | null

    constructor(f: Formula<T>, private l?: Tableaux<FTypes>) {
        this.formula = f
        const branches = this.branch
        this.right = branches[1]
        this.left = l || branches[0]
    }

    private get branch(): [Tableaux<FTypes> | null, Tableaux<FTypes> | null] {
        if (this.formula.has_two_constituents(this.formula.formula)) {
            if (this.formula.formula[1] === '&') {
                return [new Tableaux(this.formula.formula[0], new Tableaux(this.formula.formula[2])), null]
            } else if (this.formula.formula[1] === '->'){
                const negation_decomposition = this.formula.formula[0].negation()
                return [new Tableaux(negation_decomposition), new Tableaux(this.formula.formula[2])]
            } else {
                return [new Tableaux(this.formula.formula[0]), new Tableaux(this.formula.formula[2])]
            }
        } else if (this.formula.is_negation(this.formula.formula)){
            return [null, null]
        } else {
            return [null, null]
        }
    }

    log (): void {
        
        if (this.left) this.left.log()
        if (this.right) this.right.log()
    }

    get isClosed(): boolean {
        let check = false
        let branches = this.get_branches
        const negation_branch = branches.find(branch => branch.some(formula => formula.is_negation(formula.formula)))
        while (negation_branch){
            
            const negation = negation_branch.find(formula => formula.is_negation(formula.formula))
            console.log(negation)
            const contradiction = negation_branch.find(formula => formula == negation?.left)
            if (contradiction){
                check = true
                break
            } else {
                branches = branches.filter(branch => branch != negation_branch)
                const filtered_negation_branch = negation_branch.filter(formula => formula != negation)
                branches = [...branches, filtered_negation_branch]
            }
        
        }
        return check
    }

    private get_branches_execution(tree: Tableaux<FTypes>, branches: any[], trace: null | Formula<FTypes>[] = null): void {
        trace = Array.isArray(trace) ? [...trace, tree.formula] : [tree.formula]
        const this_branches_l = tree.left ? this.get_branches_execution(tree.left, branches, trace) : []
        const this_branches_r = tree.right ? this.get_branches_execution(tree.right,  branches, trace) : []
        if (! (tree.left || tree.right)) {
            branches.push(trace)
        }
    }
    get get_branches(): Formula<FTypes>[][] {
        let branches: Formula<FTypes>[][] = []
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

const P = new Formula<Basic>('P', "Atomic")
const not_P = P.negation()
const Q = new Formula<Basic>('Q', "Atomic")
const R = new Formula<Basic> ('R', "Atomic")
const not_Q = Q.negation()
const P_or_Q = P.disyunction(Q)
const T = new Tableaux(P.conjunction(R).conjunction(Q).conjunction(not_Q))
console.log(T.get_branches)
console.log(T.isClosed)

/// [ [], 1] --> 2

//      P & (P v Q)
//      P
//      (P v Q)
//          /\
//         /  \
//        P    Q

let array = [1, [[2]], [1]]


    //     P
    //    /\
    //   R  Q
    //  /\   \
    // T S    S