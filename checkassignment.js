function writeToPageAssignment(){

    var c_a = document.getElementById("course_assignment1").value;
    var t_a = document.getElementById("title_assign").value;
    var desc = document.getElementById("desc").value;
    var subd = document.getElementById("subd").value;
    

    if(c_a === ""){
        alert("Please fill out the Course/Assignment field.");
        return false;
    }
    else if(t_a === ""){
        alert("Please fill out the Title field.");
       return false;
    }
    else if(desc === ""){
        alert("Please fill out the Description field.");
        return false;
    }
    else if(subd === ""){
        alert("Please fill out the Submission Date field.");
        return false;
    }
    else{
        return true;
    }
    	
}


function confirm_form_assignment(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("assignment-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}
