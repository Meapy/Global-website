function validate() {
	//alert("This is the validate function");
	var age = document.getElementById('age').value;

	function () {
         if ('age').value() < 1) && >100 {
             alert("Please enter a valid number");
         }
	
	//Check that the firstname field is not blank
	if(document.regForm.firstname.value == "") {
		alert("Name can't be blank!!");
		return false;
	}
	
	//Check that the surname field is not blank
	if(document.regForm.surname.value == "") {
		alert("Surname can't be blank!!");
		return false;
	}
	
	//Check that the age field is not blank
	if(document.regForm.age.value == "") {
		alert("Age can't be blank!!");
		return false;
	}

	if(document.regForm.email.value == "") {
		alert("Email can't be blank!!");
		return false;
	}

    if(validateEmail(email) == false) {
	alert(Email is not in the correct format!!");
	}
	
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());


