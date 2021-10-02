function writeToPageStudent(){

    var fn = document.getElementById("fname2").value;
    var ln = document.getElementById("lname2").value;
    var fees = document.getElementById("fees").value;
    var dob = document.getElementById("dob").value;
    

    if(fn === ""){
        alert("Please fill out the First Name field.");
        return false;
    }
    else if(ln === ""){
        alert("Please fill out the Last Name field.");
       return false;
    }
    else if(fees === ""){
        alert("Please fill out the Fees field.");
        return false;
    }
    else if(dob === ""){
        alert("Please fill out the Date Of Birth field.");
        return false;
    }
    else{
        return true;
    }
    	
}


function confirm_form_student(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("student-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}
