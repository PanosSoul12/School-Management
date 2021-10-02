function writeToPageStudentPerCourse(){

    var st = document.getElementById("st-check").value;
    var sc1 = document.getElementById("existingStudents").value;
   
    

    if(st === ""){
        alert("Please fill out the Student field.");
        return false;
    }
    else if(sc1 === ""){
        alert("Please fill out the Course field.");
       return false;
    }
    else{
        return true;
    }
}

function confirm_form_studentpercourse(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("studentpercourse-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}

