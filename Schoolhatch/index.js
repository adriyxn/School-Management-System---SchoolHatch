
//validation for log in form
function loginvalidation(){
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const erroremail = document.getElementById('erroremail')
    const errorpassword = document.getElementById('errorpassword');

    //Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (email.value === "" && password.value === ""){
        erroremail.innerHTML = 'Email is empty';
        errorpassword.innerHTML = 'Password is empty';
        return false;
    }else {
        erroremail.innerHTML = '';
        errorpassword.innerHTML = '';
    }


    if(email.value === ""){
        password.focus();
        erroremail.innerHTML = 'Email is empty';
        return false;
    } else {
        erroremail.innerHTML = '';
    }


    if(password.value === ""){
        password.focus();
        errorpassword.innerHTML = 'Password is empty';
        return false;
    } else {
        errorpassword.innerHTML = '';
    }


    if (!regEmail.test(email.value)) {
        email.focus();
        erroremail.innerHTML = 'Email is not valid';
        return false;
	}else {
        erroremail.innerHTML = '';
    }


    if (password.value.length<8){
        password.focus();
        errorpassword.innerHTML = 'Password should has at least 8 characters';
        return false;
    }else {
        erroremail.innerHTML = '';
        errorpassword.innerHTML = '';
    }
}




////////////////////////////validation for register form/////////////////
function registervalidation(){
    //get input elements
    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const password = document.getElementById('password')
    const conpassword = document.getElementById('conpassword')

    //get error div elements
    const errorfname = document.getElementById('errorfname')
    const errorlname = document.getElementById('errorlname')
    const erroremail = document.getElementById('erroremail')
    const errorphone = document.getElementById('errorphone')
    const errorpassword = document.getElementById('errorpassword')
    const errorconpassword = document.getElementById('errorconpassword')

    //Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;


    //javascript regex for phone number
    var phoneno = /^\d{10}$/;

    //javascript regex for password validation
    var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //check if all inputs are empty
    if(fname.value === "" && lname.value === "" && email.value === "" && 
    phone.value === "" && password.value === "" && conpassword.value === ""){
        errorfname.innerHTML = 'First name is empty';
        errorlname.innerHTML = 'Last is empty';
        erroremail.innerHTML = 'Email is empty';
        errorphone.innerHTML = 'Phone number is empty';
        errorpassword.innerHTML = 'password is empty';
        return false;
    }else{
        errorfname.innerHTML = '';
        errorlname.innerHTML = '';
        erroremail.innerHTML = '';
        errorphone.innerHTML = '';
        errorpassword.innerHTML = '';
    }

    //check if first name is empty
    if(fname.value === ""){
        errorfname.innerHTML = 'First name is empty';
        return false;
    }else{
        errorfname.innerHTML = '';
    }

    //check if last name is empty
    if(lname.value === ""){
        errorlname.innerHTML = 'Last name is empty';
        return false;
    }else{
        errorlname.innerHTML = '';
    }

    //check if email is empty
    if(email.value === ""){
        password.focus();
        erroremail.innerHTML = 'Email is empty';
        return false;
    } else {
        erroremail.innerHTML = '';
    }

    //check if email pattern is correct
    if (!regEmail.test(email.value)) {
        email.focus();
        erroremail.innerHTML = 'Email is not valid';
        return false;
	}else {
        erroremail.innerHTML = '';
    }

    //check if phone number is empty
    if(phone.value === ""){
        errorphone.innerHTML = 'Phone number is empty';
        return false;
    }else{
        errorphone.innerHTML = '';
    }

    //check if phone number pattern is right
    if(!phoneno.test(phone.value)){
        errorphone.innerHTML = 'Phone number is invalid';
        return false;
    }else{
        errorphone.innerHTML = '';
    }


    //check if password is empty
    if(password.value === ""){
        password.focus();
        errorpassword.innerHTML = 'Password is empty';
        return false;
    } else {
        errorpassword.innerHTML = '';
    }

    //check if password pattern is right
    if(!passwordregex.test(password.value)){
        password.focus();
        errorpassword.innerHTML = 'Password must contain eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        return false;
    }else{}

    //check if the confirm password is same as password
    if (conpassword.value != password.value){
        conpassword.focus();
        errorconpassword.innerHTML = 'Passwords are not matching';
        return false;
    }else {
        errorconpassword.innerHTML = '';
    }
}



//validation for student registration form
function studentinfovalidation(){
    //get input elements
    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    
    const fathername = document.getElementById('fathername')
    const fatheroccupation = document.getElementById('fatheroccupation')
    const fatherphone = document.getElementById('fatherphone')
    const fatheremail = document.getElementById('fatheremail')

    const mothername = document.getElementById('mothername')
    const motheroccupation = document.getElementById('motheroccupation')
    const motherphone = document.getElementById('motherphone')
    const motheremail = document.getElementById('motheremail')

    const addline = document.getElementById('addline')
    const city = document.getElementById('city')
    const postalcode = document.getElementById('postalcode')


    //get error div elements
    const errorfname = document.getElementById('errorfname')
    const errorlname = document.getElementById('errorlname')

    const errorfathername = document.getElementById('errorfathername')
    const errorfatheroccupation = document.getElementById('errorfatheroccupation')
    const errorfatherphone = document.getElementById('errorfatherphone')
    const errorfatheremail = document.getElementById('errorfatheremail')

    const errormothername = document.getElementById('errormothername')
    const errormotheroccupation = document.getElementById('errormotheroccupation')
    const errormotherphone = document.getElementById('errormotherphone')
    const errormotheremail = document.getElementById('errormotheremail')

    const erroraddressline1 = document.getElementById('erroraddressline1')
    const errorcity = document.getElementById('errorcity')
    const errorpostal = document.getElementById('errorpostal')

    //Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;


    //javascript regex for phone number
    var phoneno = /^\d{10}$/;

    //check if all inputs are empty
    if(fname.value === "" && lname.value === "" && fathername.value === "" && 
    fatheroccupation.value === "" && fatherphone.value === "" && fatheremail.value === "" && 
    mothername.value === "" && motheroccupation.value === "" && motherphone.value === "" && 
    motheremail.value === "" && addline.value === "" 
    && city.value === "" && postalcode.value === ""){
        errorfname.innerHTML = 'First name is empty';
        errorlname.innerHTML = 'Last is empty';
        
        errorfathername.innerHTML = 'Email is empty';
        errorfatheroccupation.innerHTML = 'Phone number is empty';
        errorfatherphone.innerHTML = 'password is empty';
        errorfatheremail.innerHTML = 'Enter email';

        errormothername.innerHTML = 'Enter mothers name';
        errormotheroccupation.innerHTML = 'Enter mothers occupation';
        errormotherphone.innerHTML = 'Enter mothers phone number';
        errormotheremail.innerHTML = 'Enter mothers email';

        erroraddressline1.innerHTML = 'Address line is empty'
        errorcity.innerHTML = 'Enter your city';
        errorpostal.innerHTML = 'Enter postal code';
        return false;
    }else{
        errorfname.innerHTML = '';
        errorlname.innerHTML = '';
        
        errorfathername.innerHTML = '';
        errorfatheroccupation.innerHTML = '';
        errorfatherphone.innerHTML = '';
        errorfatheremail.innerHTML ='';

        errormothername.innerHTML = '';
        errormotheroccupation.innerHTML = '';
        errormotherphone.innerHTML = '';
        errormotheremail.innerHTML = '';

        erroraddressline1.innerHTML = ''
        errorcity.innerHTML = '';
        errorpostal.innerHTML = '';
    }

    //check if first name is empty
    if(fname.value === ""){
        errorfname.innerHTML = 'First name is empty';
        fname.focus();
        return false;
    }else{
        errorfname.innerHTML = '';
    }

    //check if last name is empty
    if(lname.value === ""){
        errorlname.innerHTML = 'Last name is empty';
        lname.focus();
        return false;
    }else{
        errorlname.innerHTML = '';
    }

    //check if father name is empty
    if(fathername.value === ""){
        errorfathername.innerHTML = 'Name is empty';
        fathername.focus();
        return false;
    } else {
        errorfathername.innerHTML = '';
    }

    //check if father occupation is empty
    if(fatheroccupation.value === ""){
        errorfatheroccupation.innerHTML = 'Occupation is empty';
        fatheroccupation.focus();
        return false;
    } else {
        errorfatheroccupation.innerHTML = '';
    }

    //check if father phone number is empty
    if(fatherphone.value === ""){
        errorfatherphone.innerHTML = 'Phone number is empty';
        fatherphone.focus();
        return false;
    }else{
        errorfatherphone.innerHTML = '';
    }

    //check if father phone number is empty
    if(fatherphone.value === ""){
        errorfatherphone.innerHTML = 'Phone number is empty';
        fatherphone.focus();
        return false;
    }else{
        errorfatherphone.innerHTML = '';
    }

    //check if father phone number pattern is right
    if(!phoneno.test(fatherphone.value)){
        errorfatherphone.innerHTML = 'Phone number is invalid';
        fatherphone.focus();
        return false;
    }else{
        errorfatherphone.innerHTML = '';
    }

    //check if father email is empty
    if(fatheremail.value === ""){
        errorfatheremail.innerHTML = 'Email is empty';
        fatheremail.focus();
        return false;
    } else {
        errorfatheremail.innerHTML = '';
    }

    //check if father email pattern is correct
    if (!regEmail.test(fatheremail.value)) {
        errorfatheremail.innerHTML = 'Email is not valid';
        fatheremail.focus();
        return false;
	}else {
        errorfatheremail.innerHTML = '';
    }

    



    //check if mother name is empty
    if(mothername.value === ""){
        errormothername.innerHTML = 'Name is empty';
        mothername.focus();
        return false;
    } else {
        errormothername.innerHTML = '';
    }

    //check if mother occupation is empty
    if(motheroccupation.value === ""){
        errormotheroccupation.innerHTML = 'Occupation is empty';
        motheroccupation.focus();
        return false;
    } else {
        errormotheroccupation.innerHTML = '';
    }

    //check if mother phone number is empty
    if(motherphone.value === ""){
        errormotherphone.innerHTML = 'Phone number is empty';
        motherphone.focus();
        return false;
    }else{
        errormotherphone.innerHTML = '';
    }

    //check if mother phone number pattern is right
    if(!phoneno.test(motherphone.value)){
        errormotherphone.innerHTML = 'Phone number is invalid';
        motherphone.focus();
        return false;
    }else{
        errormotherphone.innerHTML = '';
    }

    //check if mother email is empty
    if(motheremail.value === ""){
        errormotheremail.innerHTML = 'Email is empty';
        motheremail.focus();
        return false;
    } else {
        errormotheremail.innerHTML = '';
    }

    //check if mother email pattern is correct
    if (regEmail.test(motheremail.value)) {
        errormotheremail.innerHTML = 'Email is not valid';
        motheremail.focus();
        return false;
	}else {
        errormotheremail.innerHTML = '';
    }

    

    //check if address line 1 is empty
    if(addline.value === ""){
        erroraddressline1.innerHTML = 'Address Line 1 is empty';
        addline.focus();
        return false;
    }else{
        erroraddressline1.innerHTML = '';
    }

    //check if city is empty
    if(city.value === ""){
        errorcity.innerHTML = 'City is empty';
        city.focus();
        return false;
    }else{
        errorcity.innerHTML = '';
    }

    //check if postal code is empty
    if(postalcode.value === ""){
        errorpostal.innerHTML = 'Postal code is empty';
        postalcode.focus();
        return false;
    }else{
        errorpostal.innerHTML = '';
    }

}