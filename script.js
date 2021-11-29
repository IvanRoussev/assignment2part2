
function cleanUpView() {
    let viewclass  = document.querySelector('.main')
    viewclass.innerHTML = ''
}



function createSingleView(contactList){
	return `<div class="main">
	<div class="contactinfo">
		<div class="contactname">
			Raquel Ervin
			<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
		</div>
		<div class="contactemail">${contactList.email}</div>
		<div class="contactphone">${contactList.phone}</div>
		<div class="contactaddress">${contactList.address}</div>
		<div class="buttons">
			<button class="button edit" value="Edit">Edit</button>
			<button class="button close" value="Close">Close</button>
		</div>
	</div>
</div>>`
}


/*Done       run =  renderView(contactList)         */ 
function renderView(contactList) {
	let viewclass = document.querySelector('.main')
	for (let i = 0; i < contactList.length; i++) {
        viewclass.insertAdjacentHTML('beforeend', createSingleView(contactList[i]))
    }
}


/*____________________________________________________________________________________________________*/


function cleanUpCreate(){
	let page2 = document.querySelector('.form')
	page2.innerHTML= ''
}


function createsinglecreate(contactList) {
	return `<div class="form">
	<form>
		<div class="inputcontainer">
			<input type="text" id="contactname" name="contactname" placeholder="Contact Name">
			<button class="extrafield" id="extranamefield" name="extranamefield">+</button>
		</div>

		<div class="inputcontainer">
			<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
			<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
		</div>

		<div class="inputcontainer">
			<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
			<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
		</div>
		
		<div class="inputcontainer">
			<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
			<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
		</div>

		<div class="buttons">
			<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
			<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
		</div>
	</form>
</div>`
}




/*___________________________________________________________________________________________________*/


/*	(1)	*/

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



/*	(2)	*/


function cleanUpIndex() {
	let classmain = document.querySelector('.main')
	classmain.innerHTML= ''	
	
}

function createSingleIndex(contactList) {
	return `<a href="page3.html"><div class="contact"><p>${contactList.name}</p></div></a>`
}

function renderindex(contactList) {
    let classmain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classmain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

const contact_one = document.querySelector('#contactshome')

function eventfunction(event){
	event.preventDefault()	
	cleanUpIndex()
	renderindex(contactList)
}

contact_one.addEventListener('click', eventfunction)


/*	(3) */

function cleanUpView() {
    let viewclass  = document.querySelector('.main')
    viewclass.innerHTML = ''
}

function renderCreate(contactList) {
	let createclass = document.querySelector('.form')
	for (let i = 0; i < contactList.length; i++) {
        createclass.insertAdjacentHTML('beforeend', createsinglecreate(contactList[i]))


	}
}


const createContact = document.querySelector('#newcontact')


function CreateRenderNewContact(event){
	event.preventDefault()	
	cleanUpView()
	renderCreate(contactList)
}

createContact.addEventListener('click', CreateRenderNewContact)








/*	(4)	

function createSingleIndex(contactList) {
	let div = document.createElement('div')
	div.className = 'contact'
	let text = document.createTextNode(`${contactList.name}`)
	div.appendChild(text)

	const contact = document.querySelector('.div');

	contact.addEventListener('Click', function(){
		console.log('test to see if works')
	})
	return div

}


/*	(5)	*/







/*	(6)	*/












/*	(7)	*/




/*	(8)	*/








/*	(9)	*/











/*	(10)	*/








