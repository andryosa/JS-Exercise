class User{
    constructor(userName, passWord){
        this.name = userName;
        this.pass = passWord
    }
    changePass(newPass){
        this.pass = newPass
    }
}

let ul = new User('Kumaro', '1234')


class Person {
    constructor(firstName, lastName,dob){
        this.first = firstName;
        this.last = lastName;
    }
    
}

let greeting = new Person('Kumaro', 'Khan')
console.log(greeting)


class Person2 {
    constructor(firstName, lastName,dob){
        this.first = firstName;
        this.last = lastName;
        this.birthdate = new Date(dob)
    }

    greeting(){
        return `Hello There ${this.first} ${this.last}`
    }

    calAge(){
        const diff = Date.now() - this.birthdate.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear()-1970)
    }

    getMarried(newLastName){
        this.lasts = newLastName;
    }

}

let mustafa = new Person('Mustafa', 'Othman', '08-19-1985')
// mustafa.getMarried('Mercedes')
console.log(typeof mustafa)



