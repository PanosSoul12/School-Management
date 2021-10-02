function writeToPageAssignmentPerCourse(){

    var as = document.getElementById("as-check").value;
    var sc2 = document.getElementById("existingAssignments").value;
   
    

    if(as === ""){
        alert("Please fill out the Assignment field.");
        return false;
    }
    else if(sc2 === ""){
        alert("Please fill out the Course field.");
       return false;
    }
    else{
        return true;
    }
}

function confirm_form_assignmentpercourse(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("assignmentpercourse-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}

