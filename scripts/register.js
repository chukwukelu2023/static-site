const button = document.getElementById("registerbtn")

button.addEventListener("click",btnFunction)

function btnFunction(){
    const email = document.getElementById("email")
    const password = document.getElementById("psw")
    const repeat = document.getElementById("psw-repeat")
    
    if(email.value == "" || password.value == "" || repeat == ""){
        alert("Enter values for Username and Password.")
        email.value = ""
        password.value = ""
        repeat.value = ""
        return
    }

    if(password.value !== repeat.value){
        alert("Password Mismatch. Both passwords must match.")
        password.value = ""
        repeat.value = ""
        return
    }

    alert(`Congratulations ${email.value}. You have successfully Registered`)
        email.value = ""
        password.value = ""
        repeat.value = ""
        redirect()
   return
}

function redirect(){
    location.href = "../index.html"
}