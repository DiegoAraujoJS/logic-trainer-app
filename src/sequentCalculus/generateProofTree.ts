type Negation = {
    kind: 'negation',
    body: ['not', string]
}
type Disyunction = {
    kind: 'disyunction',
    body: [string, 'or', string]
}
type Conjunction = {
    kind: 'conjunction',
    body: [string, 'and', string]
}
type Atomic = {
    kind: 'atomic',
    body: [string]
}
type Formula = Atomic | Negation | Conjunction | Disyunction

type FormulaMultiSet = Formula[]

type Sequent = {
    left_side: FormulaMultiSet,
    right_side: FormulaMultiSet
}

type ProofTree = {
    sequent: Sequent,
    left: ProofTree | null,
    right: ProofTree | null
}

function generateProofTree(s: ProofTree): ProofTree {
    return s
}