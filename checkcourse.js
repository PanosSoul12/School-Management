function writeToPageCourse(){

    var tit = document.getElementById("title").value;
    var ty = document.getElementById("type").value;
    var st_da = document.getElementById("start-date").value;
    var en_da = document.getElementById("end-date").value;

    if(tit === ""){
        alert("Please fill out the Title field.");
        return false;
    }
    else if(ty === ""){
        alert("Please fill out the Type of the course field.");
       return false;
    }
    else if(st_da === ""){
        alert("Please fill out the start date.");
        return false;
    }
    else if(en_da === ""){
        alert("Please fill out the end date.");
        return false;
    }
    else if(st_da >= en_da){
        alert("The start date must be before the end date !!");
        return false;
    }
    else{
        return true;
    }
    	
}

function confirm_form_course(){
    if(confirm("Are you sure you want to save the form ?")){
        alert("The form was Submitted !");
        document.getElementById("course-form").reset();
        return false;
    }
    else{
        alert("The form was Cancelled ");
        return false;
        
    }
}
