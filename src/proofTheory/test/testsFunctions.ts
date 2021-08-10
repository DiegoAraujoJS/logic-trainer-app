import { BasicFormula, JunctionFormula, NegationFormula } from "../../Interfaces"
export function is_basic(f: BasicFormula | JunctionFormula | NegationFormula): f is BasicFormula {
    if (!Array.isArray(f)) return true
    else return false
}
export function all_are_basic (f: JunctionFormula | NegationFormula): boolean{
    
    const amap = f.map(formula => {
        if (typeof formula === "string") return undefined
        if (is_basic(formula.formula)) return true
        return (all_are_basic(formula.formula))
    })
    console.log(amap)
    return !amap.some(check => check === false)
}
