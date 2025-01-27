
const api = "https://opticalerp.in:85/api/tokens/gettoken"

const loginForm = document.getElementById("loginForm")
let userEmail = document.getElementById("email")
let userPassword = document.getElementById("password")

loginForm.addEventListener("submit" , function(event){

    event.preventDefault()
    console.log("Function was Called..!")

    let email = userEmail.value
    let password = userPassword.value

    let data = {
        email : email,
        password : password
    }

    fetch("https://opticalerp.in:85/api/tokens/gettoken" , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body : JSON.stringify(data)
    })
    .then((res)=>{res.json()})
    .then((data)=>{
        console.log("Success : " , data)
    })
    .catch((error)=>{
        console.log("Error : " , error)
    })

})