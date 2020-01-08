// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

// UI Variables
const amount = document.getElementById('amount')
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')
const results = document.getElementById('results')
const loading = document.getElementById('loading')
// Calculate Results
function calculateResults(e){
    e.preventDefault()
    results.style.display= 'none'
    loading.style.display= 'block'
    console.log('Calculating ...')
    // Hide results

    // Show loader
    // --
    setTimeout(clearLoaderShowresults,3000)
    // prefentDefault
// principles
let amountValue = parseFloat(amount.value)
let interestValue = parseFloat(interest.value) / 100 / 12;
let yearsValue = parseFloat(years.value) * 12

// Compute monthly payment
const x = Math.pow(1 + interestValue, yearsValue)
const monthly = (amountValue*x*interestValue) / (x-1)

if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * yearsValue).toFixed(2)
    totalInterest.value = ((monthly * yearsValue)-amountValue).toFixed(2)
    
}else{
    // alert('error!')
    showError('Please check your numbers')
}
}

function clearLoaderShowresults(){
    results.style.display= 'block'
    loading.style.display= 'none'
}

function showError(error){
    // Create a div
    const errorDiv = document.createElement('div')

    // add class
    errorDiv.className = 'alert alert-danger';
    // create text  node
    errorDiv.appendChild(document.createTextNode(error))

    // get element
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    // insert error above heading
    card.insertBefore(errorDiv,heading)
    // hide the loader
}