var loginButton = document.getElementById("login-btn")
var registerButton = document.getElementById("register-btn")
var loginDialog = document.getElementById("loginDialog");

var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");

var confirmButton = loginDialog.querySelector("#confirmBtn");
var cancelButton = loginDialog.querySelector("#cancelBtn");
var dialogForm = loginDialog.querySelector("form");

loginButton.addEventListener('click', () => 
{
    loginDialog.showModal();
});

registerButton.addEventListener('click', () => 
{
    loginDialog.showModal();
});

loginDialog.addEventListener('close', (e) =>
{
    dialogForm.reset();
    emailInput.style.borderColor = "revert";
    passwordInput.style.borderColor = "revert";
});

cancelButton.addEventListener('click', (event) => 
{
    loginDialog.close();
});

confirmButton.addEventListener('click', (event) =>
{
    event.preventDefault(); 

    if(emailInput.value == "" || passwordInput.value == "")
    {
        // Here we will want to make the inputs outline red
        // and maybe show a message that says the title is empty
        if(emailInput.value == "") 
        {
            emailInput.style.borderColor = "red";
        }
        else emailInput.style.borderColor = "limegreen";

        if(passwordInput.value == "") passwordInput.style.borderColor = "red";
        else passwordInput.style.borderColor = "limegreen";
    }

    else {
        loginDialog.close();
    }

});