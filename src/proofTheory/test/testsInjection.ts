import { BasicFormula } from "../../Interfaces"
import Formula from "../Formula"

const f1: BasicFormula = {
    letter: 'P',
    sub_index: 1
}
const F1 = new Formula(f1)
export const F2 = F1.conditional(F1).conjunction(F1).negation()
export const F3 = F1.conjunction(F1).conjunction(F1)

