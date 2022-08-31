
let formElement=document.getElementById('registration');
formElement.addEventListener('submit', function(event){
    event.preventDefault();

    
    let error={};

    let form=event.target;

   
   
   let username=document.getElementById('username').value; 
  

   if (username.length<5 ||username==""){
    error.usernameValue="username value must be more then 5 characters"
   }



let password=document.getElementById('passw').value;
let password2=document.getElementById('passw2').value;

if (password.length < 5 && password !=password2) {
    error.password="passwords more then 5 symbols";
}
if (password!=password2){
    error.password2="passwords do not match";
};



let agree=document.getElementById('agree').checked;
if(agree==false) 
    {error.agree="you must agree the terms";

}



let gender=false;
form.querySelectorAll('[name="gender"]').forEach(item=>{
    if (item.checked){
        gender=true;
    }

})

if(!gender){
    error.gender="select your gender";
}

console.log(error);



form.querySelectorAll('.error-text').forEach(element=>{
    element.innerHTML="";
});



 for (let item in error){
    console.log(item);

    
   
    let TextError=document.getElementById('error_'+item);


    if (TextError){
        TextError.textContent=error[item];
    }
 }

if(Object.keys(error).length==0){
    form.submit();
}

});

let error={
    username:"username value must be more then 5 characters",
    gender:"select your gender",
    agree:"you must agree the terms",
    password2: "passwords do not match"

}

    let passwordShow = document.getElementById("showhide");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (passwordShow.type == "password") {
    passwordShow.setAttribute("type", "text");
    icon.classList.add("fa-eye-slash");
  } else {
    icon.classList.remove("fa-eye-slash");
    passwordShow.setAttribute("type", "password");
  }



});

function validationEmail() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let errorText = document.getElementById("text");
  
    let emailStructure =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (email.match(emailStructure)) {
      form.classList.add("valid");
      errorText.innerHTML = "Your Email is Valid";
      errorText.style.color = "green";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      errorText.innerHTML = "Your Email is Invalid";
      errorText.style.color = "red";
    }
  
    if (email == "") {
      form.classList.remove("valid");
      form.classList.add("invalid");
      errorText.innerHTML = "Enter Your Email";
      errorText.style.color = "blue";
    }
  }
  
let scroll=document.getElementById('top');
scroll.addEventListener('click', function()
{
window.scrollTo({
    top:0,
    behavior:"smooth" 
});
});