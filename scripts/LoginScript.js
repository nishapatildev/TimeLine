function ValidateUser() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
     if(userName =="Nisha" && password == "Nisha"){
        
            document.getElementById("demo").innerHTML = "SUCCESS";     
    }else{
        return false;
    }

}