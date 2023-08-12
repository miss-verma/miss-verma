function validation(values){
let error = {}
const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ContactNumber_pattern = /^(?=.*\d)(?=.*[0-9]){10,}$/

if(values.email === ""){
    error.email = "Name should not be empty"
}
else if(!email_pattern.test(values.email)){
    error.email ="Email Didn't match"
}
else{
    error.email =""
}
if(values.ContactNumber_pattern ===""){
    error.ContactNumber_pattern= "Contact should not be empty"
}
else if (!ContactNumber_pattern.test(values.ContactNumber_pattern)){
    error.ContactNumber_pattern="contact Nmuber Didn't match"
}else{
    error.ContactNumber_pattern =""
}
return error;
}
export default validation;