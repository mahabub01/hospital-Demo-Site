/**
FUNTION SELECTALL CHECK BOXES
**/
function SelectAll(frm) {
 //alert(frm.selectall.checked);
   if(frm.selectall.checked == true) {
   
     for(i=0;i<frm.elements.length;i++) {
       if((frm.elements[i].type == "checkbox") && (frm.elements[i].name != "selectall")) {
         frm.elements[i].checked = true;
       } // if statement
     } // for loop
   }
   else if(frm.selectall.checked == false) {
    
      for(i=0;i<frm.elements.length;i++) {
         if((frm.elements[i].type == "checkbox") && (frm.elements[i].name != "selectall")) {
           frm.elements[i].checked = false;
         } // if statement
      } // for loop
   } // if - else - if condition

} // closing the function SelectAll()

/**
 FUNCTION VALIDDATES
**/
function ValidDates(dd1,mm1,yyyy1,dd2,mm2,yyyy2,msg) {

 xFlag = 0;
 
 /*The Following Code has been commented by Nari
 if((DateValidation(dd1,mm1,yyyy1) == 0) && (DateValidation(dd2,mm2,yyyy2) == 0))*/
 
 // Start of Code Added by Nari
 if((DateValidation(dd1,mm1,yyyy1,'null') == 0) || (DateValidation(dd2,mm2,yyyy2,'null') == 0))
 xFlag = 1;
 if(xFlag==1)
 {
   return 0
 }
 
 // End of Code Added by Nari
 
if(xFlag == 0) {
 var ddd1 = new Number(dd1.value) ;
 var mmm1 = new Number(mm1.value) - 1;
 var yyy1 = new Number(yyyy1.value);

 var ddd2 = new Number(dd2.value) ;
 var mmm2 = new Number(mm2.value) - 1;
 var yyy2 = new Number(yyyy2.value);

 var dObj1 = new Date(yyy1,mmm1,ddd1,0,0,0,0);
 var dObj2 = new Date(yyy2,mmm2,ddd2,0,0,0,0);

if(dObj1 > dObj2) {
alert(msg);
dd1.focus();
return 0;
}
}
else 
return 1;

} // closing the function ValidDates()

function dval(yyy,mmm,ddd) {
 
  var dObj = new Date(yyy,mmm,ddd,0,0,0,0);

  var dd = dObj.getDate();
  var mm = dObj.getMonth();
  var yy = dObj.getFullYear();

  if((dd == ddd) && (yy == yyy) && (mm == mmm)) {
    return true;
  }  
  else {
    return false;
  }
    
} // closing the function dval()

/**
 FUNCTION DATEVALIDATION(dd,mm,yy,msg) 
 **/
function DateValidation(dd, mm, yy, msg) {

   
 if(NumValidation(dd,'Date','','num') == 0)
 return 0;
 
 if(NumValidation(mm,'Month','','num') == 0)
 return 0;
 
 if(NumValidation(yy,'Year','','num') == 0)
 return 0;
 

 
 d = parseInt(dd.value);
 m = parseInt(mm.value);
 y = parseInt(yy.value);
 
 if(m > 12 || m == 0) {
 alert("Invalid month");
 mm.focus();
 return 0;
 }
 else {
 
 var vDays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
 var flag = 0;
 if(m == 2) {
 if(isLeapYear(y)) {
    if( d > 29 || d < 1 ) {
     flag = 0;
     }
    else {
     flag = 1;
     }
  }
  else if( d > vDays[m] || d < 1 ) {
   flag = 0;
   }
  else {
     flag = 1;
   }
 }
 else {
 if( d > vDays[m] || d < 1 ) {
  flag = 0;
 }
 else {
  flag = 1;
 }  
 }
 }
 if(flag == 0) {
 if(msg == 'null') {
 alert("Invalid date");
 }
 else {
 alert(msg);
 }
 dd.focus();
 return 0;
 }
 else {
 return 1;
 }
 
 
} // closing the function DateValidation() 

function isLeapYear(y) {
 if( y % 4 == 0) {
  if( y % 100 == 0 ) {
   if( y % 400 == 0) {
    return true;
   }
   else {
    return false;
   }
  }
  else {
   return true;
}
 }
 else {
  return false;
 }

} // closing the function isLeapYear()
 
/**
 FUNCTION PASSVALIDATION(element1,element2) 
 **/

function PassValidation(Element1,Element2) {

if(Element1.value != Element2.value) {
alert("Retype Password doesn't match");
Element2.focus();
return 0;
}

} // closing the function PassValidation()

function EmailidValidation(Element1,Element2) {

if(Element1.value != Element2.value) {
alert("Retype Emailid doesn't match");
Element2.focus();
return 0;
}

} // closing the function PassValidation()

/**
 FUNCTION SELECTVALIDATION(element,message) 
 **/

function SelectValidation(Element,Message) {

if(Element.value == "0") {
alert("Please select "+Message+" from the list");
Element.focus();
return 0;
}

}

/**
 FUNCTION EMAILVALIDATION(element) 
 **/
 
function EmailValidation(Element) {

Flag  = 1;
count = 0;
var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_@.-";

if(Element.value.length > 0) {

for (var i=0;i<Element.value.length;i++){
temp=Element.value.substring(i,i+1);
if (alp.indexOf(temp)==-1){
Flag = 0;
}
} // closing the for loop

}
else {
Flag = 0;
}

for(var i=0;i<=Element.value.length;i++) {
 
    if(Element.value.charAt(0)=='@') {
Flag = 0;
break;
    }
    if(Element.value.charAt(Element.value.length-1)=='@') {
Flag = 0;
break;
    }
    if(Element.value.charAt(i)=='@') {
      count=count+1;
    if(count>1){
        Flag = 0;
break;
        }
        if((Element.value.charAt(i-1)=='.') || (Element.value.charAt(i+1)=='.')) {
        Flag = 0;
break;
  }
    }
    if(Element.value.indexOf('@')==-1){
Flag = 0;    
break;
    }
    if(Element.value.charAt(0)=='.') {
Flag = 0;
break;
    }
    if(Element.value.indexOf('.')==-1){
    Flag = 0;    
    break;
    }
    
      } //closing the for loop

if(Element.value.charAt(Element.value.length-1) == '.')
Flag = 0;

if(Flag != 1){
alert("Invalid Email Address\nValid Entries [a-z][A-Z][0-9][ _ @ . - ]");
Element.focus();
return 0;
}

}

/**
 FUNCTION NUMVALIDATION(element,message,spl,onlynum) 
 **/

function NumValidation(Element,MessageLen0,spl,OnlyNum) {

if(MessageLen0.length != 0) {
if(isBlank(Element.value) || Element.value.length == 0)  {
alert("Please enter the "+ MessageLen0);
Element.focus();
return 0;
}
}

if(OnlyNum == "num") {
if(isNaN(Element.value))  {
alert("Please enter only Numeric Data");
Element.focus();
return 0;
}
if(parseInt(Element.value) < 0)  {
alert("No Negative values");
Element.focus();
return 0;
}

}

if(spl == "spl" && OnlyNum != "num") {
if(SplNumbers(Element) == 0)
return 0;
}


} // closing the function NumValidation()


/**
 FUNCTION GENVALIDATION(element.message1,message2,spl) 
 **/

function GenValidation(Element,MessageLen0,MessageLen4,spl) {

if(MessageLen0.length != 0) {

if(Element.value.length == 0)  {
alert("Please enter the "+ MessageLen0);
Element.focus();
return 0;
}
else if(isBlank(Element.value)) {
 alert("Please enter the "+ MessageLen0);
 Element.focus();
return 0;
}

}

if(MessageLen4.length != 0) {
if(Element.value.length < 2) {
alert( MessageLen4 + " should be more than 2 characters");
Element.focus();
return 0;
} // closing the if - else condtion for if(MessageLen4.length != 0)
}

if(spl == "spl") {
if(SplCharacters(Element) == 0)
return 0;
}
else if(spl == "space") {
if(SplCharactersSpace(Element) == 0)
return 0;
}


} // closing the function GenValidation()


/**
 FUNCTION SPLCHARACTERS(element) 
 **/

function SplCharacters(Val) {

var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

for (var i=0;i<Val.value.length;i++){
temp=Val.value.substring(i,i+1);
if (alp.indexOf(temp)==-1){
alert("No special characters \nValid entries are [a-z][A-Z][0-9][ _ ]");
Val.focus();
return 0;
}
} // closing the for loop

} // closing the function SplCharacters()

/**
 FUNCTION SPLCHARACTERS(element) 
 **/

function SplCharactersSpace(Val) {

var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

for (var i=0;i<Val.value.length;i++){
temp=Val.value.substring(i,i+1);
if (alp.indexOf(temp)==-1){
alert("No special characters \nValid entries are [a-z][A-Z][0-9][ space ]");
Val.focus();
return 0;
}
} // closing the for loop

} // closing the function SplCharactersSpace()

/**
 FUNCTION SPLNUMBERS(element) 
 **/

function SplNumbers(Val) {

var alp = "0123456789- ";

for (var i=0;i<Val.value.length;i++){
temp=Val.value.substring(i,i+1);
if (alp.indexOf(temp)==-1){
alert("No special characters \nValid entries are [0-9][single space, - ]");
Val.focus();
return 0;
}
} // closing the for loop

} // closing the function SplNumbers()


/**
 FUNCTION FOR CHECKING THE FIELD CONTAINS BLANK VALUES ISBLANK(Element.value)
 **/
//To check if trim(value) is blank
function isBlank(txt)
{

if( txt.length == getCountOf(' ', txt) )
{
return true;
}
else
{
return false;
}
}

//This can be used for any character validation.
//For example in a valid date the count of - or / should not be more than 2
//Likewise in a valid numer there should be only one .
function getCountOf(vChr, txt)
{
var i = 0;
var iCount = 0;

for( i=0; i < txt.length; i++ )
{
if( txt.charAt(i) == vChr )
{
iCount++;
}
}
return iCount;
}


function getSelectedIndex(radgroup)
{
/* Returns back the id of selected radio button in a radio button group  */
var j = -1;
for( i=0; i < radgroup.length; i++ )
{
if( radgroup[i].checked )
{
j = i;
}
}
return j;
}

/**
 FUNCTION TEXTAREAVALIDATION(element,message,len) 
 **/

function TextareaValidation(elem,msg,len) {

 if(elem.value.length > 0)
       {
if(elem.value.length > len) 
{
alert(msg+" should not exceed "+len+" characters");
elem.focus();
return 0;
}
       }
} // closing the function TextareaValidation()

/** FUNCTION PHONEVALIDATION(element) **/

// Declaring required variables
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 0;
var minDigitsInIFax = 0;

function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function checkInternationalPhone(strPhone){
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

function checkInternationalFax(strPhone){
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIFax);
}


function PhoneValidation(elem)
{

if ((elem.value==null)||(elem.value=="")){
alert("Enter Contact Number");
elem.focus();
return 0;
}
if (checkInternationalPhone(elem.value)==false){
alert("Please Enter a Valid Contact Number");
elem.value="";
elem.focus();
return 0;
}
return true
 }


function FaxValidation(elem)
{

if (checkInternationalFax(elem.value)==false){
alert("Please Enter a Valid Fax Number");
elem.value="";
elem.focus();
return 0;
}
return true
 }


function checkInCharSet(txt, charset)
{
	var b = true;

	for(i = 0; i < txt.length; i++ )
	{
		if( charset.indexOf(txt.charAt(i)) == -1 )
		{
			b = false;
		}
	}

	return b;
}


