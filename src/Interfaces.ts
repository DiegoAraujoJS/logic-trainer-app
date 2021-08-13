import Formula from './proofTheory/Formula'
import Tableaux from './proofTheory/Tableaux'

export interface IFormula<T extends FTypes> {
    conjunction: (f: Formula<T>) => Formula<Conjunction>;
    disyunction: (f: Formula<T>) => Formula<Disyunction>;
    conditional: (f: Formula<T>) => Formula<Conditional>;
    negation: () => Formula<Negation>;
    formula: T
    readonly inmediate_constituents: [Formula<FTypes>, Formula<FTypes> | null] | null;
}

export type FTypes = Conjunction | Disyunction | Conditional | Negation | Basic
export type Basic = 'P' | 'Q'
export type Conjunction = [Formula<FTypes>, '&', Formula<FTypes>] 
export type Disyunction = [Formula<FTypes>, 'v', Formula<FTypes>]
export type Conditional = [Formula<FTypes>, '->', Formula<FTypes>]
export type Negation = ['¬', Formula<FTypes>]

export type InmediateConstituents = [Formula<FTypes>, Formula<FTypes> | null] | null

export interface ITableaux {
    left: Tableaux | null;
    right: Tableaux | null;


}
