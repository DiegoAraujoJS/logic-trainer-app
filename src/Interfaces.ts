import Formula from './proofTheory/Formula'

export interface BasicFormula {
    letter: 'P' | 'Q' | 'R' | 'S'
    sub_index: number;
}

export type JunctionFormula = [Formula, "&" | "|" | "->", Formula]

export type NegationFormula = ["¬", Formula]

export type ConjunctionFormula =  [Formula, "&" , Formula]

