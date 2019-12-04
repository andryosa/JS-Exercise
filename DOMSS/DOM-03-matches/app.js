// The Element.matches(css-selector)
// does not look for anything, it merely checks if the element matches the given CSS-selector.
// return  true, otherwise it return false

// The method comes in handy when we are iterating over elements
// (for example array or anything similiar) and trying to filter out
// those that interest us.

const elements = document.body.children
for(let elem of elements){
    if(elem.matches('a[href$="zip"]')){
        console.log(`The archive reference: ${elem.href}`)
    }
}