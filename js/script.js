//varible declare;

var fname = document.getElementById('fname');
var fnameerr = document.getElementById('fnameerr');
var lname = document.getElementById('lname');
var lnameerr = document.getElementById('lnameerr');
var email = document.getElementById('email')
var emailerr = document.getElementById('emailerr');
var pass = document.getElementById('pass');
var passerr = document.getElementById('passerr');
var conpass = document.getElementById('conpass');
var conpasserr = document.getElementById('conpasserr');

function subm(){
    if(fname.value == ""){
        fname.style.border="1px solid  red";
        fnameerr.innerHTML =" Pleass enter your name"
        fname.focus();
        return false;
    }
    if(lname.value == ""){
        lname.style.border = "1px solid red";
        lnameerr.innerHTML = "Pleass enter your last name";
        lname.focus();
        return false;
    }
    if(email.value == ""){
        email.style.border = "1px solid red";
        emailerr.innerHTML =" Pleass enter your email";
        email.focus();
        return false;
    }
    if(pass.value == ""){
        pass.style.border = "1px solid red";
        passerr.innerHTML = "pleass enter your Password";
        pass.focus();
        return false;
    }
    if(pass.value.length <= 5){
        pass.style.border = "1px solid red";
        passerr.innerHTML = "Pleass inter 6 digit";
        pass.focus();
        return false;
    }
    if(conpass.value == ""){
        conpass.style.border= "1px solid red";
        conpasserr.innerHTML = "Pleass enter your confim passworld";
        conpass.focus();
        return false;
    }
    if(pass.value != conpass.value){
        conpass.style.border = "1px solid red";
        conpasserr.innerHTML="don't mach pass";
        conpass.focus();
        return false;
    }
}
function errvalid(){
    if(fname.value !=""){
        fname.style.border = "1px solid blue";
        fnameerr.innerHTML = "";
    }
    if(lname.value !=""){
        lname.style.border= "1px solid blue";
        lnameerr.innerHTML ="";
    }
    if(email.value !=""){
        email.style.border = " 1px solid blue";
        emailerr.innerHTML = "";
    }
    if(pass.value !=""){
        pass.style.border = "1px solid blue";
        passerr.innerHTML = "";
    }
    if(conpass.value !=""){
        conpass.style.border= "1px solid blue";
        conpasserr.innerHTML= "";
    }
}

fname.addEventListener('blur',errvalid);
lname.addEventListener('blur',errvalid);
email.addEventListener('blur',errvalid);
pass.addEventListener('blur',errvalid);
conpass.addEventListener('blur',errvalid);