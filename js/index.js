// Javascript validFormFieldInput(data)
let PassengerFirstName=document.getElementById('passenger1_fname');
let PassengerLastName=document.getElementById('passenger1_lname');
let Ageuser1=document.getElementById('passenger1_age');
var Emailpassenger1 = document.getElementById('passenger1_email');
let PhonePassenger1=document.getElementById('passenger1_mobile');


let PassengerFirstName2=document.getElementById('passenger2_fname');
let PassengerLastName2=document.getElementById('passenger2_lname');
let Ageuser2=document.getElementById('passenger2_age');
var Emailpassenger2 = document.getElementById('passenger2_email');
let PhonePassenger2=document.getElementById('passenger2_mobile');


let PassengerFirstName3=document.getElementById('passenger3_fname');
let PassengerLastName3=document.getElementById('passenger3_lname');
let Ageuser3=document.getElementById('passenger3_age');
var Emailpassenger3 = document.getElementById('passenger3_email');
let PhonePassenger3=document.getElementById('passenger3_mobile');

var Departpassenger1 = document.getElementById('departure');
var Arrivalpassenger1 = document.getElementById('arrival');


//This function is called when we click on submit button in form
document.getElementById("Submit")
.addEventListener("click",(event)=>{
    event.preventDefault();
    
    validateInput();
    const errorpage = document.querySelector(".error");
        if (!errorpage) window.location.href = "submission.html";

});

function validateInputEmpty(ElementInput,chkmessage) {

  
//   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
// var name = document.getElementById('nameInput').value;
// if(!regName.test(name)){
//     alert('Invalid name given.');
// }else{
//     alert('Valid name given.');
// }

  if (ElementInput.value.trim() === "") {
      onError(ElementInput, chkmessage);
      return false;
      
  } else  {
      onSuccess(ElementInput);
      return true;
  }
}


function validateInputAge(AgeInput) {

  if(AgeInput.value > 0 && AgeInput.value.trim() !="") {
    onSuccess(AgeInput);
}
else {
   onError(AgeInput,"Please Enter valid Age");
}
}

function validateInputPhoneNumber(phonenumberInput) {

  var phoneno = /^\d{10}$/;
  if(phonenumberInput.value.match(phoneno))
  {
    onSuccess(phonenumberInput);
  }
  else
  {
    onError(phonenumberInput,"Please Enter valid PhoneNumber");  
  }
}

function validateInputemail(emailInput) {

  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!filter.test(emailInput.value))     {
    onError(emailInput,"Please Enter valid email");    
    }
    else
    onSuccess(emailInput);
}



function validateInput()
{
    
  validateInputEmpty(PassengerFirstName,"Invalid First name");
  validateInputEmpty(PassengerLastName,"Invalid  Last name");
  validateInputAge(Ageuser1);
  validateInputemail(Emailpassenger1);
  validateInputPhoneNumber( PhonePassenger1);

  if(PassengerFirstName2.value.trim()!=="")
  {
    validateInputAge(Ageuser2);
    validateInputemail(Emailpassenger2);
    validateInputPhoneNumber( PhonePassenger2);
    validateInputEmpty(PassengerFirstName2,"Invalid  First name");
    validateInputEmpty(PassengerLastName2,"Invalid  Last name");

  }
  

  if(PassengerFirstName3.value.trim()!=="")
  {
    validateInputAge(Ageuser3);    
    validateInputemail(Emailpassenger3);    
   validateInputPhoneNumber( PhonePassenger3);
    validateInputEmpty(PassengerFirstName3,"Invalid  First name");
    validateInputEmpty(PassengerLastName3,"Invalid  Last name");
  }

  validateInputEmpty(Departpassenger1,"Invalid departure");
  validateInputEmpty(Arrivalpassenger1,"Invalid arrival");

 
  return true;

}
function onSuccess(input){
  
    let parent=input.parentElement;
    let messageEle=parent.querySelector("Error");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){

   
    let parent=input.parentElement;
    let messageEle=parent.querySelector("Error");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");
    

}

