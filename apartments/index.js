let apt1 = {
    bedrooms: 2,
    sqft: 50, 
    bathrooms: 3, 
    windows: 0,
    rent: 4500, 
    unit: '1A',
    tenants: []
}
let apt2 = {
    bedrooms: 2,
    sqft: 500, 
    bathrooms: 3, 
    windows: 0,
    rent: 1500, 
    unit: '1B',
    tenants: []
}
let apt3 = {
    bedrooms: 2,
    sqft: 53, 
    bathrooms: 3, 
    windows: 2,
    rent: 2400, 
    unit: '1C',
    tenants: []
}

let apt4 = {
    bedrooms: 2,
    sqft: 53, 
    bathrooms: 3, 
    windows: 2,
    rent: 900, 
    unit: '1D',
    tenants: []
}

let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    Age: 30
}

let tenant2 = {
    name: 'Jane Doe',
    creditScore: 800,
    salary: 22000,
    Age: 33
}

let building = {
    streetAdress: '11 Broadway, New York, NY, 11222',
    laundry: false,
    allowsPets: false, 
    lease: function (apt, tenant) {
        if(apt.tenants.length === apt.bedrooms) {
            return `${apt.unit} is already full`
        } 

        if (this.allowsPets === false && tenant.pet) { 
            return `${apt.unit} is available, but you must give ${tenant.pet} up for adoption!`
        }
        let t = apt.tenants.push(tenant)    
        console.log(tenant.name, "has rented out", apt.unit)
        return t
    },
    occupiedApts: function() { 
        // returns only the apts which have tenants inside them
        // condition to test: apt.tenants.length
        return this.apartments.filter((el) => {
            return el.tenants.length > 0
        })
    }, 
    fullApts: function() {
        //returns the apts which are completely full
        //condition to test: apt.tenants.lenght === apt.bedrooms 
        return this.apartments.filter((el) => {
            return el.tenants,length === el.bedrooms 
        })
    },
    apartments: [apt1, apt2, apt3]

}

// Write a basic JavaScript object that represents a user that has no fewer than 3 keys/properties about that user
const user = {
    name: "Jerry",
    address: "11 Broadway",
    age: 27,
}

// Write a function called greet that takes no arguments and prints the string "Hello World"
const greet = () => {
    console.log("Hello, World!")
}

// Create an array called fruits with 5 elements
const fruits = ['apple', 'orange', 'pineapple', 'pear', 'peach']

//console.log the second element and console.log the last element of the above array
console.log(fruits[1])
console.log(fruits.length - 1)

// Create an object that represents an apartment building without referring to any code


let apt5 = {
    rent:3000,
    laundry: true,
    bedrooms: 3

}

let apt6 = {
    rent:2500,
    laundry: true,
    bedrooms: 2
     
}

let apt7 = {
    rent:2000,
    laundry: true,
    bedrooms: 1, 
     
}

let aptBuilding = {
    apartments: [apt5, apt6, apt7],
    tenants: [],
    streetAddress: "11 Broadway", 
}


// array.push()
// const nfcTeams = ['49ers', 'rams', 'seahawks']
// nfcTeams.push('cardinals')
// const afcTeams = ['titans', 'browns', 'cheifs']
// nfcTeams.push(...afcTeams)

// Console.table() revieew
// const family = {
//     mother: {
//         firstName: "Susan",
//         lastName: "Doyle",
//         age: 32
//     },
//     father: {
//         firstName: "John",
//         lastName: "Doyle",
//         age: 33
//     },
//     daughter: {
//         firstName: "Lily",
//         lastName: "Doyle",
//         age: 5
//     },
//     son: {
//         firstName: "Mike",
//         lastName: "Doyle",
//         age: 8
//     }
// }
