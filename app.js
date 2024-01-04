const passwordField = document.querySelector(".input");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");

generateBtn.addEventListener("click", ()=>{
    let chars =  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    let passwordLength = 12;
    let password = "";

    for(let i = 0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    
    passwordField.value = password;
})

copyBtn.addEventListener("click", async ()=>{
    let copyText = passwordField.value;
    console.log(copyText);
    try {
        await navigator.clipboard.writeText(copyText);
        alert("Password Copied to clipboard!");
    } catch (error) {
        alert("Failed to copy: ", error);
    }
})


