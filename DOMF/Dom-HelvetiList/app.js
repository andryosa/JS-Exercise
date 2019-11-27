const newHeading = document.body.appendChild(document.createElement('h2'));
newHeading.appendChild(document.createTextNode('HelvetiList'))
newHeading.style.fontFamily= 'Helvetica'

const list1 = document.body.appendChild(document.createElement('li'));
list1.appendChild(document.createTextNode('Zurich'))
list1.style.fontFamily= 'Helvetica'

const list2 = document.body.appendChild(document.createElement('li'));
list2.appendChild(document.createTextNode('Geneva'))
list2.style.fontFamily= 'Helvetica'

const list3 = document.body.appendChild(document.createElement('li'));
list3.appendChild(document.createTextNode('Winterthur'))
list3.style.fontFamily= 'Helvetica'

const list4 = document.body.appendChild(document.createElement('li'));
list4.appendChild(document.createTextNode('Lausanne'))
list4.style.fontFamily= 'Helvetica'

const list5 = document.body.appendChild(document.createElement('li'));
list5.appendChild(document.createTextNode('Lucerne'))
list5.style.fontFamily= 'Helvetica'

const lists = [list1, list2, list3, list4, list5]

lists[i].style.color = 'green'