import { BasicFormula } from "../../Interfaces"
import Formula from "../Formula"

const f1: BasicFormula = {
    letter: 'P',
    sub_index: 1
}
const p: BasicFormula = {
    letter: 'P',
    sub_index: 1
}
const q: BasicFormula = {
    letter: 'Q',
    sub_index: 1
}
const F1 = new Formula(f1)
export const P = new Formula(p)
export const Q = new Formula(q)
export const F2 = F1.conditional(F1).conjunction(F1).negation()
export const F3 = F1.conjunction(F1).conjunction(F1)

