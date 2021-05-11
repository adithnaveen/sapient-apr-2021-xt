const {loginClient} = require("../scripts/client-login")
 
const initApp =() => {
    console.log("in the controller... ");
    document.querySelector("#loginUser").addEventListener("click", loginUserController); 
}

const loginUserController = async (event) => {
    event.preventDefault()
    let obj = {}; 
    obj.email=document.querySelector("#email").value; 
    obj.password =document.querySelector("#password").value; 
    obj.pic="/pic.jpg"

    console.log(obj);
    let result = await loginClient(obj); 
    
    console.log("result " , result)
    return false; 
}

initApp()