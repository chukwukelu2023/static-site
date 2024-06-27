const button = document.getElementById("btnlog")

button.addEventListener("click",btnFunction)

function btnFunction(){
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    if(email.value == "" || password.value == ""){
        alert("Enter values for Username and Password.")
        email.value = ""
        password.value = ""
        return
    }

    alert(`Congratulations ${email.value}. You have successfully Logged In`)
        email.value = ""
        password.value = ""
    return
}