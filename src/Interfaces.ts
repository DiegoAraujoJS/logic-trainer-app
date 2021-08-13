import Formula from './proofTheory/Formula'

export interface IFormula<T extends FTypes> {
    conjunction: (f: Formula<T>) => Formula<Conjunction>;
    disyunction: (f: Formula<T>) => Formula<Disyunction>;
    conditional: (f: Formula<T>) => Formula<Conditional>;
    negation: () => Formula<Negation>;
    formula: T
}

export type FTypes = Conjunction | Disyunction | Conditional | Negation
export type Conjunction = [Formula<FTypes>, '&', Formula<FTypes>] 
export type Disyunction = [Formula<FTypes>, 'v', Formula<FTypes>]
export type Conditional = [Formula<FTypes>, '->', Formula<FTypes>]
export type Negation = ['¬', Formula<FTypes>]


