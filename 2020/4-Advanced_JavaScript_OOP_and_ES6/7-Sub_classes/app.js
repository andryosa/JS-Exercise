class Person {
    constructor(firstName, lastName){
        this.fName = firstName;
        this.lName = lastName;

    }

    greeting(){
        return `Hello There ${this.fName} ${this.lName}`
    }
}

class Customer extends Person{
    constructor(cFirstName, cLastName, phoneN, memberShip){
        super(cFirstName, cLastName)
        this.phone = phoneN
        this.membership = memberShip
    }

    giveMembershipCost(cost){
        this.memcost = cost
    }

}

let c1 = new Customer('Harris', 'Riaz', '555-6666', 'standard')

console.log(c1)


class Property{
    constructor(location, size){
        this.location1 = location;
        this.size1 = size
    }
}

class Flat extends Property{
    constructor(location2, size2, owner, price){
        super(location2, size2);
        this.owner = owner;
        this.price = price;
    }
    calculatePrice(){
        return this,price * size2
    }
}

let myFlat = new Flat ('Hamburg', '200m', 'Andri', '400.000')

console.log(myFlat)

class Clinic extends Flat{
    constructor(type, doctor){

    }
}

class Person2 {
    constructor(firstName, lastName){
        this.fName = firstName;
        this.lName = lastName;

    }
}