const multiply = (n1 , n2) => {
    return; 
    return n1 * n2
}

const double = (n) => {
    return n * 2
}

double(multiply(2, 4))
// 2 * 4 = 8 
// then 8 * 2 because of the double const n * 2
// which ends up as 16

let array1 = ['a', 'b', 'c', 'd', 'e']
let array2 = [1, 2, 3, 4, 5, 6, 7]

const determineLength = (arr) => {
    if (arr.determineLength > 5) {
        return 'This array is long';
    } else {
        return 'This array is short'
    }
}

const askForString = () => {
    let str = prompt('ENTER A STRING')
    return str
}

console.log(askForString().split(''))

const array = ['michael', 'jack', 'emily', 'koby']

const newArray = array.map((el) => {
    return el.toUpperCase()
})
console.log(newArray)
