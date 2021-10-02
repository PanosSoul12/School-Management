function writeToPageTrainer(){

    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var sub = document.getElementById("subject").value;
    

    if(fn === ""){
        alert("Please fill out the First Name field.");
        return false;
    }
    else if(ln === ""){
        alert("Please fill out the Last Name field.");
       return false;
    }
    else if(sub === ""){
        alert("Please fill out the Subject field.");
        return false;
    }
    else{
        return true;
    }
    	
}


function confirm_form_trainer(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("trainer-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}
