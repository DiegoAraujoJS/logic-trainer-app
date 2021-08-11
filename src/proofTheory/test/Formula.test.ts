import { BasicFormula, JunctionFormula, NegationFormula } from "../../Interfaces";
import Formula from "../Formula";
import { F2, F3, P, Q } from "./testsInjection";
import {is_basic, all_are_basic, is_theorem} from './testsFunctions'

describe ('It should reduce all formulas to basic formulas and their connectors', () => {
    it('It should reduce all formulas to basic formulas and their connectors', () => {

        if (!is_basic(F2.formula)) expect (all_are_basic(F2.formula)).toBe(true)
    })
})

describe('Test the validity of inferences', () => {
    it ('p -> p should be a theorem', () => {
        expect (is_theorem(F2.conditional(F2))).toBe(true)
    })
    it ('p -> q should not be a theorem', () => {
        expect(is_theorem(P.conditional(Q))).toBe(false)
    })
})