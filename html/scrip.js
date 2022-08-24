var nameError =document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('Subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('namef').value;

    if(name.length == 0){
        nameError.innerHTML = 'Enter your name';
        return false;
    }
    
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       nameError.innerHTML = 'Enter your full name';
        return false;
    }
    
    nameError.innerHTML = " ";
    return true;
  

}

function validateEmail(){

    var email = document.getElementById('emailf').value;

    if(email.length == 0){
        emailError.innerHTML = 'Enter your email'
        return false;
    }

    if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){

        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '';
    return true
}

function validateSubject(){
    var subject=document.getElementById('subjectf').value;

    if(subject.length==0){
        subjectError.innerHTML='subject requird';
        return false;
    }
    if(subject.length>20){
        subjectError.innerHTML='subject is too long..';
        return false;
    }
    subjectError.innerHTML="";
    return true;

}

function validateMessage(){
    var message=document.getElementById('messagef').value;

    if(message.length==0){
        messageError.innerHTML='message requird';
        return false;
    }
   
    messageError.innerHTML="";
    return true;

}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || ! validateMessage() ){
        submitError.style.direction = 'block';
        submitError.innerHTML = 'Please Fix the errors to submit'
        
        return false;
    }
    submitError.innerHTML="";
    return true;
}



