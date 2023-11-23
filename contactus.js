
function validateForm(){
var name = document.contactus.Name;
var email = document.contactus.Email;
var query = document.contactus.Query;


var count = 0;
if (name.value === "") {
name.placeholder="Please fill this field";
name.style.border = "2px solid red";
count++;
}
   if (email.value === "") {
email.placeholder="Please fill this field";
email.style.border = "2px solid red";
count++;
}
if (query.value === "") {
query.placeholder="Please fill this field";
query.style.border = "2px solid red";
count++;
}


if(count>0)
 return false;
}