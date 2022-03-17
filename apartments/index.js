let apt1 = {
    bedrooms: 2,
    sqft: 50, 
    bathrooms: 3, 
    windows: 0,
    rent: 4500, 
    unit: '1A',
    lease: function (tenant) {
        this.tenants.push(tenant)
        console.log(tenant.name, "has rented out", this.unit)
    },
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
    apartments: [apt1, apt2, apt3]

}


// bedrooms: ,
//         sqft: ,
//         bathrooms: ,
//         windows: , 
//         rent: ,
//         unitNumber: ,