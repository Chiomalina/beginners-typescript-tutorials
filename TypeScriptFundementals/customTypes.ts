// Challenge: finish the object type definition

type Person = {
    name: string
    age: number
    isStudent: boolean    
} | {
    name: string
    age: number
    isstudent: boolean    
}


let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isstudent: false
}