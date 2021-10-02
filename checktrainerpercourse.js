function writeToPageTrainerPerCourse(){

    var tr = document.getElementById("tr-check").value;
    var sc = document.getElementById("existingCourses").value;
   
    

    if(tr === ""){
        alert("Please fill out the Trainer field.");
        return false;
    }
    else if(sc === ""){
        alert("Please fill out the Course field.");
       return false;
    }
    else{
        return true;
    }
}

function confirm_form_trainerpercourse(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("trainerpercourse-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}

