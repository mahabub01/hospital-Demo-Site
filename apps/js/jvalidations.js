// JavaScript Document


function InputValidation(fieldID, fieldName){
	if(fieldID.value ==""){
		alert("Please Enter "+fieldName);
		fieldID.focus();
		return false;
	}
}

function ImageValidation(fieldID, fieldName){
	if(fieldID.value ==""){
		alert("Please Upload "+fieldName);
		fieldID.focus();
		return false;
	}
}

function MobileValidation(fieldID){
	if(fieldID.value ==""){
		alert("Please Enter Your Mobile Number in the required field to proceed.");
		fieldID.focus();
		return false;
	}
	if(fieldID.value.length>15 || fieldID.value.length<10){
		alert("Please Enter Your Mobile Number of morethan 10-12 digits.");
		fieldID.value='';
		fieldID.focus();
		return false;
	}
}

function EmailValidation(fieldID){
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(fieldID.value == "" ) //Validation against empty field for fullname
	{
		alert('Please Enter Your Email Id in the required field to proceed.');
		fieldID.focus();
		return false;
	}
	
	if(reg.test(fieldID.value) == false) //Validation for working email address
	{
		alert('Incorrect/Invalid Email Id. Please Enter Valid Email Id!.');
		fieldID.value='';
		fieldID.focus();
		return false;
	}	
}

function RadioValidation(){
	
}

function SelectValidation(fieldID, fieldName){
	if(fieldID.value ==""){
		alert("Please Select "+fieldName);
		fieldID.focus();
		return false;
	}
}

function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32);
}

function IsNumeric(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k >= 48 && k <= 57) || (k==43) || (k==8) || (k==46));
}