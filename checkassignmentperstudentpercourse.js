function writeToPageAssignmentPerStudentPerCourse(){

    var as = document.getElementById("as-check").value;
    var st6 = document.getElementById("st3-check").value;
    var sc3 = document.getElementById("existingCourses").value;
   
    

    if(as === ""){
        alert("Please fill out the Assignment field.");
        return false;
    }
    else if(st6 === ""){
        alert("Please fill out the Student field.");
       return false;
    }
    else if(sc3 === ""){
        alert("Please fill out the Course field.");
       return false;
    }
    else{
        return true;
    }
}

function confirm_form_assignmentperstudentpercourse(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("assignmentperstudentpercourse-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}
