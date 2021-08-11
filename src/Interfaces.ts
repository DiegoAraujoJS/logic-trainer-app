import FormulaClass from './proofTheory/Formula'

export interface BasicFormula {
    letter: 'P' | 'Q' | 'R' | 'S'
    sub_index: number;
}

export type JunctionFormula = [FormulaClass, "&" | "|" | "->", FormulaClass]

export type NegationFormula = ["¬", FormulaClass]

export type ConjunctionFormula =  [FormulaClass, "&" , FormulaClass]



interface Formula {
    // negation: (ƒ: Formula) => Negation
    conjunction(ƒ: Basic | Conjunction): Conjunction
    // disyunction: (ƒ: Formula) => Disyunction
    // conditional: (ƒ: Formula) => Conditional
}

interface Basic extends Formula {
    constituents: {letter: 'P' | 'Q'}
}

interface Conjunction extends Formula {
    constituents: [Basic | Conjunction, '&', Basic | Conjunction]
}

