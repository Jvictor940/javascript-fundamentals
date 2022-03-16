
const quiz = () => {
    let myName= prompt('Jerry')
    let month= prompt('July')
    let food= prompt('Jerk Shrimp Linguine')
    console.log('My name is', myName)
    console.log('I was born in', month)
    console.log('My favorite food is', food)
}

const print = () => {
    console.log('I love to print text!');
}

const functionA = () => {
    console.log('FUNCTION A HAS BEEN CALLLED!')
    functionB()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLLED!')
}

//callback 
const functionC = (f) => {
    console.log('FUNCTION C HAS BEEN CALLED')
    f()
}
// functionC(functionA)
//=> 


const blender = (string) => {
    return string.split('')
}

const square =(num, message) => {
    console.log('Message:', message)
    return num * num
}
