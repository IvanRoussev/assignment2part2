

const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]

/* 2 */
function renderIndex(contactList) {
    let mainClassElem = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        mainClassElem.appendChild(createSingleIndex(contactList[i]))
    }
}

function cleanfunctionIndex() {
    let clearfunc = document.querySelector('.main')
    
    while (clearfunc.firstChild) {
		clearfunc.removeChild(clearfunc.firstChild)
	}
}

function createSingleIndex(contact) {
	let div1 = document.createElement('div')
	div.className = 'contact'
	let text = document.createTextNode(`${contact.name}`)
	div1.appendChild(text)


	return div1

}

const createContact = document.querySelector('.nav-home')

function ContactsClearRender(evt){
	evt.preventDefault()
	cleanfunctionIndex()
	renderIndex(contactList)
}

createContact.addEventListener('click', ContactsClearRender)


function renderindex(contactList) {
    let classmain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classmain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}


function cleanCreate() {
    let clearCreatefunc = document.querySelector('.main')
    
    while (clearCreatefunc.firstChild) {
		clearCreatefunc.removeChild(clearCreatefunc.firstChild)
	}
}




































