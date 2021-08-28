// Type Predicates

import { Basic, Conjunction } from "../Interfaces"
import Formula from "../proofTheory/Formula"
console.log('asdfadsfadf')

class BinaryTree{
    value: number
    right: BinaryTree | null = null 
    left: BinaryTree | null = null
    constructor(value: any) {
        this.value = value
    }
}

function get_branches_execution(tree: BinaryTree, branches: any[], trace: null | number[] = null): void {
    trace = Array.isArray(trace) ? [...trace, tree.value] : [tree.value]
    const this_branches_l = tree.left ? get_branches_execution(tree.left, branches, trace) : []
    const this_branches_r = tree.right ? get_branches_execution(tree.right,  branches, trace) : []
    if (! (tree.left || tree.right)) {
        branches.push(trace)
    }
}

function get_branches(tree: BinaryTree) {
    let branches: any[] = []
    get_branches_execution(tree, branches)
    return branches
}

const T = new BinaryTree(1)
T.right = new BinaryTree(2)
T.right.right = new BinaryTree(7)
T.right.left = new BinaryTree(6)
T.left = new BinaryTree(3)
console.log('asdf', get_branches(T))