
/*______________1___________________ */


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


function cleanUpView() {
    let viewclass  = document.querySelector('.main')
    viewclass.innerHTML = ''
}



function cleanUpCreate(){
	let page2 = document.querySelector('div.contactedit')
	page2.innerHTML= ''
}


function CleanFunctionIndex() {
	let mainClass = document.querySelector('.main');
	
   
	while (mainClass.firstChild) {
	  mainClass.removeChild(mainClass.firstChild);
	}
  }
  
/*______________2___________________ */
const Contact_key = document.getElementById("contactshome");

function Contact_change(evt){
  console.log(Contact_change);
  evt.preventDefualt();
  CleanFunctionIndex();
  renderIndex(contactList);
};

Contact_key.addEventListener("click", Contact_change)





/*______________3___________________ */

const CreateContact = document.getElementById("newcontact");


function create_Contact_key(evt){
  console.log(CreateContact_key);
  evt.preventDefualt();
  CleanFunctionIndex();
  renderCreate();
};


CreateContact.addEventListener("click", create_Contact_key)

/*______________4___________________ */

function createSingleIndex(contact) {
  let div1 = document("div")
  div1.className = "contact"
  let intext = document.createTextNode(`${contact.name}`)
  div1.appendChild(intext)
  div1.addEventListener("click", (evt) => {
    evt.preventDefault()
    contact_Info = evt.target.textContent
    for (let i = 0; i < contactList.length; i++) {
      if (contactList[i].name == contact_Info) {
        CleanFunctionIndex()
        renderView(contactList[i])
      }
    }
  });
  return div1;
}



function renderIndex(contactList) {
	let mainClass = document.querySelector(".main");
	for (let i = 0; i < contactList.length; i++) {
	  mainClass.insertAdjacentHTML("beforeend", createSingleIndex(contactList[i])
	  );
	}
}
  

/*______________5 + 6___________________ */

function renderView() {
	const box = document.querySelector(".main");
	box.insertAdjacentHTML("afterbegin", page3_String );
	
	
	const edit_button = document.querySelector(".edit")
	function edit_butt(evt){
	  evt.preventDefault()
	  evt.stopImmediatePropagation()
	}
  
	edit_button.addEventListener("click", edit_butt)

	const Clost_butt = document.querySelector(".close")
	function close_button(){	  
		cleanUpView()

	Clost_butt.addEventListener("click", close_button)
	}

page3_String =  `<div class="contactinfo">
	<div class="contactname">
		Raquel Ervin
		<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
	</div>
	<div class="contactemail">email: rocket@gmail.com</div>
	<div class="contactphone">cell: +1 555 555-5555</div>
	<div class="contactaddress">address: 123 front st, Unit #1, Dakota City</div>
	<div class="buttons">
		<button class="button edit" value="Edit">Edit</button>
		<button class="button close" value="Close">Close</button>
	</div>
	</div>
	</div>`



page2_string = `<div class="contactedit">
<div class="contactimg">
  <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
</div>
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
</div>`

/*______________7_+ 8__________________ */

function renderCreate() {
	const box = document.querySelector(".main")
	save_button.addEventListener("click", addCleanRender)
    box.insertAdjacentHTML("afterbegin", page2_string);

    const save_button = document.querySelector(".save");
    function addCleanRender(evt){
		evt.preventDefault();
    
	    info = [];
        let getInfo = document.querySelectorAll(".inputcontainer")
        for (let i = 0; i < getInfo.length; i++) {
			info.push(getInfo[i].firstElementChild.value)}
            addInfo(info)
            cleanUpCreate()
            renderIndex(contactList)
		}
  
  
		const cancel_butt = document.getElementById("cancel");
  		function cancel_button(evt){
    		evt.preventDefualt()
    		cleanUpCreate()
    		renderIndex(contactList);
   		cancel_butt.addEventListener("click", cancel_button)

  };
}




}


/*______________9___________________ */

document.querySelector('#newcontact').addEventListener('click', renderIndex(contactList))
