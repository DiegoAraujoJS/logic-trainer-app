// Type Predicates

import { Basic, Conjunction } from "../Interfaces"
import Formula from "../proofTheory/Formula"

interface Fish {
    swim: () => void
    kind: 'fish'
}
interface Dog {
    bark: () => void
    kind: 'dog'
}

const f: Fish = {
    swim: () => console.log('blblblbl'),
    kind: 'fish'
}

const d: Dog = {
    bark: () => console.log('waf waf'),
    kind: 'dog'
}

function checker (pet: Fish | Dog) {
    pet = d
    if ('swim' in pet) {
        let check: never = pet
        pet = d
        pet
    }
}

function type_guard(pet: Fish | Dog): pet is Dog {
    return (pet as Dog).bark !== undefined
}

function bark_if_dog(){
    
    let pet: Fish | Dog | undefined; 
    
    if (Math.random() < 0.5){
        pet = {
            bark: () => console.log('wuf'),
            kind: 'dog'
        }
    } else {
        pet = {
            swim: () => console.log('blblblbl'),
            kind: 'fish'
        }
    }
    const pets: (Dog | Fish)[] = [f, d]
    const filtered: Dog[] = pets.filter(type_guard)
}

function barking(pet: Dog | Fish) {
    if (type_guard(pet)) {
        pet.bark()
    } else{
        pet.swim()
    }
}


// ------------------------------------------o---------------------------------------------------

function indentity<T>(arg: T): T {
    return arg
}

interface IForm<T> {
    value: T
    get_value: <T>(arg: T) => T
}
type Conj = IForm<string> & IForm<string[]>


type FTypes = string | number

class Form<T extends FTypes> implements IForm<T> {
    value: T;
    get_value: <T>(arg:T) => T

    constructor(value: T) {
        this.value = value
        this.get_value = <T>(arg:T) => arg
    }

    is_number(): this is Form<number> {
        return typeof this.value === 'number'
    }
    
}
let table = new Form<string>('table')


