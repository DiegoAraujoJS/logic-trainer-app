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

let branches = get_branches(T)

// console.log(branches[0].map((x: any) => Array.isArray(x) ? [branches[0][0], x].reduce((previous, current: any) => {
//     console.log(previous, current); 
//     if (Array.isArray(current)) {
//         if (Array.isArray(previous)){
//             return [...previous, ...current]
//         } else {
//             return [previous, ...current]
//         }
//     } else {
//         if (Array.isArray(previous)){
//             return [...previous, current]
//         } else {
//             return [previous, current]
//         }
//     }
// }, []) : false).filter((x: any) => x))

function transformation(array: any[] ){
    let newArray: any[] = []
    if (array[0] === 1 && Array.isArray(array[1]) && Array.isArray(array[2])){
        newArray = array.map(x => Array.isArray(x) ? [branches[0], x].reduce((previous, current: any) => {
            
            if (Array.isArray(current)) {
                if (Array.isArray(previous)){
                    return [...previous, ...current]
                } else {
                    return [previous, ...current]
                }
            } else {
                if (Array.isArray(previous)){
                    return [...previous, current]
                } else {
                    return [previous, current]
                }
            }
        }, []) : false).filter(x => x)
        return newArray
    } else {
        return array
    }
}

function traverseArrays(array: any[]) {
    
    let acum: any[] = [transformation(array)]
    console.log(transformation(array))
    let check = false
    for (const x of array) {
        if (Array.isArray(x)) {
            
            acum = [...acum, ...traverseArrays(x)]
            console.log('continue', acum)
        } else {
            check = true
            console.log(`here goes cb when some x ${x} was not array` )
        }
    }
    
    return acum
}

let array = [1, [2, 3], [2, 4]]

console.log(traverseArrays(array))

// console.log(array.map(x => Array.isArray(x) ? [1, x].reduce((previous, current: any) => {
//     console.log(previous, current); 
//     if (Array.isArray(current)) {
//         if (Array.isArray(previous)){
//             return [...previous, ...current]
//         } else {
//             return [previous, ...current]
//         }
//     } else {
//         if (Array.isArray(previous)){
//             return [...previous, current]
//         } else {
//             return [previous, current]
//         }
//     }
// }, []) : false).filter(x => x))

    //     P
    //    /\
    //   R  Q
    //  /\   \
    // T S    S