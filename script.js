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


function CleanFunctionIndex() {
  let mainClass = document.querySelector('.main');
  
 
  while (mainClass.firstChild) {
    mainClass.removeChild(mainClass.firstChild);
  }
}

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


function renderIndex(contactList) {
  let mainClass = document.querySelector(".main");
  for (let i = 0; i < contactList.length; i++) {
    mainClass.insertAdjacentHTML("beforeend", createSingleIndex(contactList[i])
    );
  }
}


function cleanUpCreate(){
	let page2 = document.querySelector('div.contactedit')
	page2.innerHTML= ''
}

Massive_string = `<div class="contactedit">
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

