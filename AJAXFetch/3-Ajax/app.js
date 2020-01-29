document.getElementById("btn1").addEventListener('click', loadCustomer)
document.getElementById("btn2").addEventListener('click', loadCustomers)
//Load Married Customer
function loadCustomer() {
    const request = new XMLHttpRequest()
    request.open('GET', 'customer.json', true)
    request.onload = function () {
        //Status: 200 - the file could be found and accessable
        if(this.status === 200) {
            
            const eren = this.responseText
            const customer = JSON.parse(eren)
            const output = `
            <ul>
                <li> ID: ${customer.id}</li>
                <li> Name: ${customer.name}</li>
                <li> Company: ${customer.company}</li>
                <li> Phone: ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output
            
        }
    }
    request.send()
}

// Load Customers
function loadCustomer(){
    const request = new XMLHttpRequest()
    request.open('GET', 'customers.json', true)
    request.onload = function () {
        
        //Status: 200 - the file could be found and accessable
        if(this.status === 200) {
            
            const andri = this.responseText
            const customer = JSON.parse(andri)

            customer.forEach(function(item){
            const output = `
            <ul>
                <li> ID: ${customers.id}</li>
                <li> Name: ${customers.name}</li>
                <li> Company: ${customers.company}</li>
                <li> Phone: ${customers.phone}</li>
            </ul>
            `
            document.getElementById('customers').innerHTML = output
                
            })
            
        }
    }
    request.send()
}

