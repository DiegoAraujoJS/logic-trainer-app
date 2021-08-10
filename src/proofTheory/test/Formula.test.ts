import { BasicFormula, JunctionFormula, NegationFormula } from "../../Interfaces";
import Formula from "../Formula";
import { F2 } from "./testsInjection";
import {is_basic, all_are_basic} from './testsFunctions'

describe ('It should reduce all formulas to basic formulas and their connectors', () => {
    it('It should reduce all formulas to basic formulas and their connectors', () => {

        if (!is_basic(F2.formula)) expect (all_are_basic(F2.formula)).toBe(true)
    })
})