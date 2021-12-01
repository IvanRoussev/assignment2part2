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
  

const Contact_key = document.getElementById("contactshome");

function Contact_change(evt){
  console.log(Contact_change);
  evt.preventDefualt();
  CleanFunctionIndex();
  renderIndex(contactList);
};

Contact_key.addEventListener("click", Contact_change)






const CreateContact = document.getElementById("newcontact");


function create_Contact_key(evt){
  console.log(CreateContact_key);
  evt.preventDefualt();
  cleanUpCreate();
  renderCreate();
};


CreateContact.addEventListener("click", create_Contact_key)


function createSingleIndex(contact) {
  let div1 = document("div");
  div1.className = "contact";
  let intext = document.createTextNode(`${contact.name}`);
  div1.appendChild(intext);
  div1.addEventListener("click", (e) => {
    e.preventDefault();
    contact_Info = e.target.textContent;
    for (let i = 0; i < contactList.length; i++) {
      if (contactList[i].name == contact_Info) {
        CleanFunctionIndex();
        renderView(contactList[i]);
      }
    }
  });
  return div1;
}

function renderView() {
	const section = document.querySelector(".main");
	section.insertAdjacentHTML("afterbegin", page3_String );
	
	
	const edit_button = document.querySelector(".edit");
	function edit_butt(evt){
	  evt.preventDefault();
	  evt.stopImmediatePropagation();
	  alert("nothing");
	};
  
	edit_button.addEventListener("click", edit_butt)

	const Clost_butt = document.querySelector(".close");
	function close_button(){	  
		cleanUpView();
	    renderIndex(contactList);
	};

	Clost_butt.addEventListener("click", close_button)

function renderIndex(contactList) {
  let mainClass = document.querySelector(".main");
  for (let i = 0; i < contactList.length; i++) {
    mainClass.insertAdjacentHTML("beforeend", createSingleIndex(contactList[i])
    );
  }
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


function renderCreate() {
	const section = document.querySelector(".main");
    section.insertAdjacentHTML("afterbegin", page2_string);

    const save_button = document.querySelector(".save");
    function addCleanRender(evt){
		evt.preventDefault();
    
	    info = [];
        let getInfo = document.querySelectorAll(".inputcontainer");
        for (let i = 0; i < getInfo.length; i++) {
			info.push(getInfo[i].firstElementChild.value);}
            addInfo(info);
            cleanUpCreate();
            renderIndex(contactList);
		};
  
  		save_button.addEventListener("click", addCleanRender)
  
		const cancel_butt = document.getElementById("cancel");
  		function cancel_button(evt){
    		evt.preventDefualt();
    		cleanUpCreate();
    		renderIndex(contactList);
   		cancel_butt.addEventListener("click", cancel_button)

  };
}




}

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
