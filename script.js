let title=document.getElementById('title');
let namefield=document.getElementById('namefield');
let email=document.getElementById('email')
let pass=document.getElementById('pass')
let Signinbtn=document.getElementById('Signinbtn');
let Signupbtn=document.getElementById('Signupbtn');

Signupbtn.onclick =function(){
    title.innerHTML="Sign Up";
    namefield.style.display ='block';
   
}
Signinbtn.onclick =function(){
    title.innerHTML="Login";
    namefield.style.display ='none';
    
}

